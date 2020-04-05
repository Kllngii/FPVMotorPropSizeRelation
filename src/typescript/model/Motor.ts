export class Motor {
  //https://www.getfpv.com/motors/what-is-a-drone-motor.html
  private kv: Number;
  private height: Number;
  private diameter: Number;

  public Motor(k: Number, h: Number, d: Number) {
    this.kv = k;
    this.height = h;
    this.diameter = d;
  }
  public getKV() {
    return this.kv;
  }
  public getHeight() {
    return this.height;
  }
  public getDiameter() {
    return this.diameter;
  }
}
