import MyArray from './Array/MyArray';

const arr = new MyArray<number>();
for (let i = 0; i < 10; i++) {
  arr.addLast(i);
}

console.log(arr.toString());

arr.add(1, 100);
console.log(arr.toString());
