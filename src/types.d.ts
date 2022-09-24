export interface IElectronAPI {
  alertHelloWorld(message: string): unknown;
  loadPreferences: () => Promise<void>,
  pickLocation: () => Promise<string>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}