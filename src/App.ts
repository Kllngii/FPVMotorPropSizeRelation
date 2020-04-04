import { app, BrowserWindow } from 'electron';
import Main from './typescript/Main';

Main.main(app, BrowserWindow, false);
