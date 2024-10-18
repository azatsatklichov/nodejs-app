"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point6 = exports.Point5 = exports.Point4 = exports.Point3 = exports.Point2 = exports.Point1 = void 0;
var Point1 = /** @class */ (function () {
    //desc?: string;
    //you can not have multiple constructors, but optional fields or factory methods can be used as an alternative 
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    //plot: () => void;
    Point1.prototype.plot = function () {
        console.log("Point1: x=" + this.x + ", y=" + this.y);
    };
    return Point1;
}());
exports.Point1 = Point1;
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.plot = function () {
        console.log("Point2: x=" + this.x + ", y=" + this.y);
    };
    return Point2;
}());
exports.Point2 = Point2;
//no field definition 
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
        //no need to assign it again
    }
    //TS compiler implicitly creates fields and initialize with value from constructor
    Point3.prototype.plot = function () {
        console.log("Point3: x=" + this.x + ", y=" + this.y);
    };
    return Point3;
}());
exports.Point3 = Point3;
//To get access to private fields, normal getters and setters 
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.plot = function () {
        console.log("Point4: x=" + this.x + ", y=" + this.y);
    };
    Point4.prototype.getX = function () {
        return this.x;
    };
    Point4.prototype.setX = function (x) {
        this.x = x;
    };
    return Point4;
}());
exports.Point4 = Point4;
//Using concept of properties
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.plot = function () {
        console.log("Point5: x=" + this.x + ", y=" + this.y);
    };
    Object.defineProperty(Point5.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point5.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: false,
        configurable: true
    });
    return Point5;
}());
exports.Point5 = Point5;
//Using concept of properties, resolves clashes
var Point6 = /** @class */ (function () {
    function Point6(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point6.prototype.plot = function () {
        console.log("Point6: x=" + this._x + ", y=" + this._y);
    };
    Point6.prototype.var = function (_variable) {
        console.log("Just see, no warning even variable not used");
    };
    Object.defineProperty(Point6.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point6.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            this._y = val;
        },
        enumerable: false,
        configurable: true
    });
    return Point6;
}());
exports.Point6 = Point6;
