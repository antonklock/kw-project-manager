export interface IElectronAPI {
  alertHelloWorld(message: string): unknown;
  loadPreferences: () => Promise<void>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}