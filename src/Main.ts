import { BrowserWindow } from 'electron';

export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow: typeof BrowserWindow;
    static isDevmode: Boolean;
    private static onWindowAllClosed() {
        if (Main.isDevmode || process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static onReady() {
        Main.mainWindow = new BrowserWindow({
          width: 1280,
          height: 720,
          webPreferences: {
            nodeIntegration: true
          }
        })
        Main.mainWindow.loadFile('../src/html/index.html');
        if(Main.isDevmode)
          Main.mainWindow.webContents.openDevTools();
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow, devmode: Boolean) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.isDevmode = devmode;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
