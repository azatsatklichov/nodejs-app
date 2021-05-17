import { Point1, Point2, Point3, Point4, Point5, Point6 } from "./points"; //no points.ts

let p1 = new Point1();
p1.x = 23;
p1.y = 40;
p1.plot();

let p2 = new Point2(23, 40);
//p2.x;
p2.plot();

let p3 = new Point3(23, 40);
//p3.x;
p3.plot();

//getters setters
let p4 = new Point4(23, 40);
//p4.x;
let x = p4.getX();
console.log(x);
p4.setX(144);
console.log(p4.getX());
p4.plot();

//concept of properties
let p5 = new Point5(23, 40);
//p5.x;
x = p5.X; //like properties
console.log(x);
p5.X = 144;
console.log(p5.X);
p5.plot();

//concept of properties - resolvng clashes
let p6 = new Point6(23, 40);
//p6._x;
x = p6.x; //like properties
console.log(x);
p6.x = 144;
console.log(p6.x);
p6.plot();
