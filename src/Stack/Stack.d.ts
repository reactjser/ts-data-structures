interface Stack<T> {
  getSize(): number;
  isEmpty(): boolean;
  push(e: T): void;
  pop(): T;
  peek(): T;
}
