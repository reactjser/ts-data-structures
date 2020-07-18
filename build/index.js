"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyArray_1 = __importDefault(require("./Array/MyArray"));
const arr = new MyArray_1.default();
for (let i = 0; i < 10; i++) {
    arr.addLast(i);
}
console.log(arr.toString());
arr.add(1, 100);
console.log(arr.toString());
