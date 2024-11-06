var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
//Auto by Interface
var Auto2 = /** @class */ (function () {
    //More fields…
    function Auto2(data) {
        this.engine = data.engine;
        this.basePrice = data.basePrice;
    }
    return Auto2;
}());
//using extended interface
var Truck2 = /** @class */ (function (_super) {
    __extends(Truck2, _super);
    function Truck2(data) {
        var _this = _super.call(this, data) || this;
        _this.bedLength = data.bedLength;
        _this.fourByFour = data.fourByFour;
        return _this;
    }
    return Truck2;
}(Auto2));
