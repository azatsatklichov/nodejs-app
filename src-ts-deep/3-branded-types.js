"use strict";
//https://egghead.io/blog/using-branded-types-in-typescript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var api = { get: function () { } }; //TBD
function getCommentsForPost(postId, authorId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            response = api.get("/author/".concat(authorId, "/posts/").concat(postId, "/comments")) //TBD
            ;
            return [2 /*return*/, response.data];
        });
    });
}
var user = { id: '32', name: "Merdan" };
var cm = { id: "32", authorId: "eee", body: "bb", timestamp: '33' };
var post = { id: '12', ownerId: "Med", comments: [cm] };
//passing arguments with wrong order is catastrophic  
var comments = getCommentsForPost(user.id, post.id); // This is OK for Typescript
function getCommentsForPost2(postId, authorId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/author/".concat(authorId, "/posts/").concat(postId, "/comments"))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
var comments2 = getCommentsForPost2(user.id, post.id);
function getCommentsForPost3(postId, authorId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
var user3 = {};
var post3 = {};
var comments3 = getCommentsForPost3(user3.id, post3.id); // ❌ This fails since `user.id` is of type UserID and no PostID as expected
function validEmail(email) {
    // email address validation logic here
    return email;
}
//With this approach, the type checker can now enforce better type safety:
function createCar(carBrand, carModel, engineType, color) {
    // ...
}
var car = createCar("Toyota", "Corolla", "Diesel", "Red"); // Error:
//Now you can use this response type, avoiding misconceptions:
var response = await fetchSomeEndpoint();
if (isApiSuccess(response)) {
    // handle success response
}
if (isApiFailure(response)) {
    // log error message
}
function meters(value) {
    return value;
}
function kilometers(value) {
    return value;
}
