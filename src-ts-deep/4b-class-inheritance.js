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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Letters_b;
var Letters = /** @class */ (function () {
    function Letters(alphabet) {
        /**
         * not supported in JS, so why # is used
         *
         * @param alphabet Private fields: Private fields in TypeScript
         * are the ones that have been newly added to JavaScript,
         * the members to be declared private are preceded by a #.
         * Private members cannot be accessed outside their class.
         */
        _Letters_b.set(this, void 0);
        this.a = alphabet;
        __classPrivateFieldSet(this, _Letters_b, alphabet, "f");
    }
    Letters.prototype.getA = function () {
        return this.a;
    };
    Letters.prototype.getB = function () {
        return __classPrivateFieldGet(this, _Letters_b, "f");
    };
    return Letters;
}());
_Letters_b = new WeakMap();
var l = new Letters("gfg");
console.log(l.getA());
console.log(l.getB());
//inhertance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.honk = function () {
        console.log("Vehicle Honks");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.display = function () {
        console.log("This is a Car");
    };
    return Car;
}(Vehicle));
var car = new Car();
/**
Explanation: Here, class Car inherits the honk() method from the Vehicle class.
 This way the Car class can reuse the methods of its parent class.
 */
car.honk(); //Vehicle Honks
car.display(); //This is a Car
/**
 * Super Keyword:
TypeScript uses the super keyword to call the properties and methods of the parent class. The primary use of the super keyword is:

To call a constructor of a parent class
To call the method of the parent class
 */
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.displayInfo = function () {
        return "I am ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        // Invoking the constructor of Person class
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.displayInfo = function () {
        return _super.prototype.displayInfo.call(this)
            + "The job title is ".concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
var employee = new Employee('Mehul', 'Sharma', 'Web Developer');
console.log(employee.displayInfo());
var v1 = {
    ady: "Oraz",
    state: "Boydak",
    info: function () {
        return this.ady + " - " + this.state;
    }
};
var v2 = {
    ady: "Alym",
    state: "married",
    info: function () {
        return this.ady + " - " + this.state;
    }
};
console.log(v1.info());
console.log(v2.info());
