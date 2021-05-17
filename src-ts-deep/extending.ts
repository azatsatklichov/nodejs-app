class Auto {
  engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
}

class Truck extends Auto {
  fourByFour: boolean;
  constructor(engine: Engine, fourByFour: boolean) {
    super(engine);
    this.fourByFour = fourByFour;
  }
}

interface IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void): void;
  stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
  engine: IEngine;
  basePrice: number;
  state: string;
  make?: string;
  model?: string;
  year?: number;
}

class Engine implements IEngine {
  constructor(public horsePower: number, public engineType: string) {}
  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }

  stop(callback: (stopStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    }, 1000);
  }
}

//Auto by Interface
class Auto2 {
  engine: IEngine;
  basePrice: number;
  //More fields…
  constructor(data: IAutoOptions) {
    this.engine = data.engine;
    this.basePrice = data.basePrice;
  }
}

//extending interface
interface ITruckOptions extends IAutoOptions {
  bedLength?: string;
  fourByFour: boolean;
}

//using extended interface
class Truck2 extends Auto2 {
  bedLength: string;
  fourByFour: boolean;
  constructor(data: ITruckOptions) {
    super(data);
    this.bedLength = data.bedLength;
    this.fourByFour = data.fourByFour;
  }
}
