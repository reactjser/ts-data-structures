interface Queue<E> {
  enqueue(e: T): void;
  dequeue(): T;
  getFront(): T;
  getSize(): number;
  isEmpty(): boolean;
}
