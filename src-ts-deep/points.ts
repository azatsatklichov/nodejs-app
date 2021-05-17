export class Point1 {
  //public
  x: number;
  y: number;
  //desc?: string;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  //plot: () => void;
  plot() {
    console.log("x=" + this.x + ", y=" + this.y);
  }
}

export class Point2 {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  public plot() {
    console.log("x=" + this.x + ", y=" + this.y);
  }
}

export class Point3 {
  constructor(private x?: number, private y?: number) {
    //no need to assign it again
  }
  //TS compiler implicitly creates fields and initialize with value from constructor
  public plot() {
    console.log("x=" + this.x + ", y=" + this.y);
  }
}

//To get access to private fields
export class Point4 {
  constructor(private x?: number, private y?: number) {}
  public plot() {
    console.log("x=" + this.x + ", y=" + this.y);
  }

  getX() {
    return this.x;
  }

  setX(x: number) {
    this.x = x;
  }
}

//Using concept of properties
export class Point5 {
  constructor(private x?: number, private y?: number) {}
  public plot() {
    console.log("x=" + this.x + ", y=" + this.y);
  }

  get X() {
    return this.x;
  }
  get Y() {
    return this.y;
  }

  set X(x: number) {
    this.x = x;
  }

  set Y(y: number) {
    this.y = y;
  }
}

//Using concept of properties, resolves clashes
export class Point6 {
  constructor(private _x?: number, private _y?: number) {}

  public plot() {
    console.log("x=" + this._x + ", y=" + this._y);
  }

  public var(_variable: string) {
    console.log("Just see, no warning even variable not used");
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  set x(val: number) {
    this._x = val;
  }

  set y(val: number) {
    this._y = val;
  }
}
