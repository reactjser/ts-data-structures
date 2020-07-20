import MyArray from '../Array/MyArray';
import ArrayStack from '../Stack/ArrayStack';

class ArrayQueue<T> implements Queue<T> {
  array: MyArray<T>;

  constructor(capacity = 10) {
    this.array = new MyArray<T>(capacity);
  }

  public getSize(): number {
    return this.array.getSize();
  }

  public isEmpty(): boolean {
    return this.array.isEmpty();
  }

  public getCapacity(): number {
    return this.array.getCapacity();
  }

  public enqueue(e: T): void {
    this.array.addLast(e);
  }

  public dequeue(): T {
    return this.array.removeFirst();
  }

  public getFront(): T {
    return this.array.getFirst();
  }

  public toString(): string {
    let res = `Queue: front [`;
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] tail';
    return res;
  }
}

export default ArrayQueue;
