export default class Queue {

  constructor(iterable) {
    this.data = [];
    if (iterable)
      for (const item of iterable)
        this.enqueue(item);
  }

  enqueue(item) {
    return this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  clear() {
    this.data = [];
  }

  has(item) {
    return this.data.some(i => i === item);
  }

  get size() {
    return this.data.length;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++)
      yield this.data[i];
  }

}

const myQueue = new Queue();
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
