import Array from '../Array/MyArray';

class ArrayStack<T> implements Stack<T> {
  array: Array<T>;

  constructor(capacity = 10) {
    this.array = new Array<T>(capacity);
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

  public push(e: T): void {
    this.array.addLast(e);
  }

  public pop(): T {
    return this.array.removeLast();
  }

  public peek(): T {
    return this.array.getLast();
  }

  public toString(): string {
    let res = `Stack: [`;
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += `] top`;
    return res;
  }
}

export default ArrayStack;
