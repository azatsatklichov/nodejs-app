console.log('Cylinder r=1 * h=1', 'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 1 * 1, 'Volume:', 3.14159 * 1 * 1 * 1);
console.log('Cylinder r=1 * h=2', 'Surface area:', 6.283185 * 1 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 1 * 2 * 1);
console.log('Cylinder r=2 * h=1', 'Surface area:', 6.283185 * 2 * 1 + 6.283185 * 2 * 1, 'Volume:', 3.14159 * 2 * 2 * 1);
var surfaceArea = function (r, h) { return 2 * Math.PI * r * (r + h); };
var volume = function (r, h) { return Math.PI * r * r * h; };
for (var _i = 0, _a = [[1, 1], [1, 2], [2, 1]]; _i < _a.length; _i++) {
    var _b = _a[_i], r = _b[0], h = _b[1];
    console.log("Cylinder r=".concat(r, " * h=").concat(h), "Surface area: ".concat(surfaceArea(r, h)), "Volume: ".concat(volume(r, h)));
}
