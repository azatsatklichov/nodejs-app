"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _4_points_1 = require("./4-points"); //no points.ts
var p1 = new _4_points_1.Point1();
p1.x = 23;
p1.y = 40;
p1.plot();
var p2 = new _4_points_1.Point2(23, 40);
//p2.x;
p2.plot();
//no field definition 
var p3 = new _4_points_1.Point3(23, 40);
//p3.x;
p3.plot();
//NORMAl getters setters
var p4 = new _4_points_1.Point4(23, 40);
//p4.x;
var x = p4.getX();
console.log(x);
p4.setX(144);
console.log(p4.getX());
p4.plot();
//concept of properties
var p5 = new _4_points_1.Point5(23, 40);
//p5.x;
x = p5.X; //like properties
console.log(x);
p5.X = 144;
console.log(p5.X);
p5.plot();
//concept of properties - resolvng clashes
var p6 = new _4_points_1.Point6(23, 40);
//p6._x;
x = p6.x; //like properties
console.log(x);
p6.x = 144;
console.log(p6.x);
p6.plot();
