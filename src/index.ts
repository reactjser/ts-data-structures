import ArrayStack from './Stack/ArrayStack';

const stack = new ArrayStack<number>();

for (let i = 0; i < 5; i++) {
  stack.push(i);
  console.log(stack.toString());
}

stack.pop();
console.log(stack.toString());
