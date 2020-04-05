import { BrowserWindow } from 'electron';
import { Store } from './StoreService';
import * as log from 'electron-log';
export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow: typeof BrowserWindow;
    static isDevmode: Boolean;
    static store = new Store({
      configName: 'preferences',
      defaults: {
        windowBounds: { width: 800, height: 600 }
      }
    });

    private static onWindowAllClosed() {
        if (Main.isDevmode || process.platform !== 'darwin') {
            Main.application.quit();
        }
    }
    private static onClose() {
        Main.mainWindow = null;
    }
    private static onResize() {
      let { width, height } = Main.mainWindow.getBounds();
      Main.store.set('windowBounds', { width, height });
      console.log("New bounds: {width:" + width + ", height:" + height + "}");
    }
    private static onReady() {
      let { width, height } = Main.store.get('windowBounds');
        Main.mainWindow = new BrowserWindow({
          width: width,
          height: height,
          webPreferences: {
            nodeIntegration: true
          }
        })
        Main.mainWindow.loadFile('../src/html/index.html');
        if(Main.isDevmode)
          Main.mainWindow.webContents.openDevTools();
        Main.mainWindow.on('closed', Main.onClose);
        Main.mainWindow.on('resize', Main.onResize);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow, devmode: Boolean) {
      Object.assign(console, log.functions);
      console.info("starting");
      Main.BrowserWindow = browserWindow;
      Main.application = app;
      Main.isDevmode = devmode;
      Main.application.on('window-all-closed', Main.onWindowAllClosed);
      Main.application.on('ready', Main.onReady);
    }
}
