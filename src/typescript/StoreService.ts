import { app, remote } from 'electron';
import { join } from 'path';
import { writeFileSync, readFileSync } from 'fs';

export class Store {
  private path: string | number | Buffer | import("url").URL;
  private data: { [x: string]: any; };
  constructor(opts: { configName: string; defaults: any; }) {
    const userDataPath = (app || remote.app).getPath('userData');
    this.path = join(userDataPath, opts.configName + '.json');
    this.data = parseDataFile(this.path, opts.defaults);
  }
  get(key: string | number) {
    let data = this.data[key];
    return data;
  }
  set(key: string | number, val: any) {
    this.data[key] = val;
    writeFileSync(this.path, JSON.stringify(this.data));
  }
}

function parseDataFile(filePath: string | number | Buffer | import("url").URL, defaults: any) {
  try {
    return JSON.parse(readFileSync(filePath).toString());
  } catch(error) {
    return defaults;
  }
}
