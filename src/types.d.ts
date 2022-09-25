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

export type Project = {
  name: string;
  client: string;
  path: string;
  starred: boolean;
  id: string;
};