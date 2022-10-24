import { app, BrowserWindow, ipcMain, dialog, shell } from 'electron';
import supabase from '../lib/supabase';

// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const windowMinSize = {x: 1100, y: 600};

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: windowMinSize.y,
    width: windowMinSize.x,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      // preload: './preload.ts',
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: true,
    },
  });

// session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
//   callback({
//     responseHeaders: {
//       ...details.responseHeaders,
//       'Content-Security-Policy': ['default-src \'self\' \'https://yyqahamdtqrwhkidlxrj.supabase.co/auth/v1/signup\' '],
//     }
//   })
// })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.setMinimumSize(windowMinSize.x, windowMinSize.y);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  ipcMain.on('alertHelloWorld', () => handleAlertHelloWorld());
  ipcMain.on('openLocation', (event: Electron.IpcMainEvent, path: string) => handleOpenLocation(path));
  createWindow();
});

ipcMain.handle('pickLocation', async () => {
  const path = dialog.showOpenDialogSync({ properties: ['openDirectory'] }) || 'No file selected';
  console.log("path:", path);
  return path;
});

ipcMain.handle('handleSignUp', async (event: Electron.IpcMainEvent, email: string, password: string) => {
  console.log('handleSignUp');
  // console.log('Email:', email);
  // console.log('Password:', password);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    console.log('error', error);
    return "failed";
  } else if (data) {
    console.log('data', data);
    return "success";
  }
});

ipcMain.handle('handleSignInWithGithub', async () => {
  console.log('signInWithGihub');
  const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log("Error: ", error);
  }
  return "success";
});


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const handleOpenLocation = (path: string) => {
  shell.showItemInFolder(path);
};

const handleAlertHelloWorld = () => {
  const path = dialog.showOpenDialogSync({ properties: ['openFile', 'openDirectory', 'multiSelections'] }) || 'No file selected';
  return path;
}

const handlePickLocation = () => {
  return dialog.showOpenDialogSync({ properties: ['openDirectory'] }) || 'No folder selected';
}

// const handleSignUp = async (email:string, password:string) => {
//   console.log("handleSignUp");
//   console.log("email: " + email);
//   console.log("password: " + password);
//   return "success";
// }