import { PropSize } from './PropSize';
import { Motor } from './Motor';
import { Url } from 'url';

export module Quad {
  export class Model {
    //FIXME: Eachine Tyro 119 & other 6" are missing in the data
    private motor: Motor;
    private props: PropSize;
    private url: Url;
    private manufacturer: String;

    public Model(motor: Motor, props: PropSize, url: Url, man: String) {
      this.motor = motor;
      this.props = props;
      this.url = url;
      this.manufacturer = man;
    }
    public ratioKVProps() {
      let p: String = this.props;
      //the metric part
      p = p.split("|")[1];
      //FIXME: number and Number aren't the same..
      let propsize: number = parseFloat(p.toString());
      //@ts-ignore
      let kv: number = this.motor.getKV;
      let ratio: number = kv/propsize;
      console.log("Propsize: " + propsize);
      console.log("KV: " + propsize);
      return ratio;
    }
  }
}
