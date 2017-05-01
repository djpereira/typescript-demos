export default class Queue<T> {

  private data: T[] = [];

  constructor(iterable?: T[]) {
    if (iterable)
      for (const item of iterable)
        this.enqueue(item);
  }

  public enqueue(item: T): number {
    return this.data.push(item);
  }

  public dequeue(): T {
    return this.data.shift();
  }

  public peek(): T {
    return this.data[0];
  }

  public clear(): void {
    this.data = [];
  }

  public has(item: T): boolean {
    return this.data.some(i => i === item);
  }

  get size(): number {
    return this.data.length;
  }

  public *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++)
      yield this.data[i];
  }

}
/*
const myQueue = new Queue<string>();
myQueue.enqueue('dog');
myQueue.enqueue('cat');
myQueue.enqueue(5);
const myValue = myQueue.dequeue();
console.log(myValue);
myValue.toFixed(2);

const myImplicitQueue = new Queue(['mouse', 'horse', 'cow']);
for (let value of myImplicitQueue) {
  console.log(value.toUpperCase());
  console.log(value.toFixed(2));
}
*/
/* Questions?
 Do I need to specify member types? Most of the time you don't, as they can be implicit
*/
