export interface IElectronAPI {
  openLocation(path: string): Promise<void>;
  alertHelloWorld(message: string): unknown;
  loadPreferences: () => Promise<void>,
  pickLocation: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI  
  }
  declare module "@iconscout/react-unicons";
  // declare module "*";
}

export type Project = {
  name: string;
  client: string;
  path: string;
  starred: boolean;
  id: string;
};