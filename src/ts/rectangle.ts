import Shape from './shape';

export default class Rectangle implements Shape {

  constructor(public readonly height: number, public readonly width: number) {
  }

  public get area(): number {
    return this.calcArea();
  }

  public get perimeter(): number {
    return 2 * (this.height + this.width);
  }

  public get diagonal(): number {
    return Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
  }

  private calcArea(): number {
    return this.height * this.width;
  }

}
/*
const square = new Rectangle(10, 10);
const square2 = new Rectangle(10, 'c');
const square3 = new Rectangle(10);
square.height = 3;
square2.calcArea();
square3.perimetre();
console.log(square.area);
*/
/* Questions?
 Do I need to specify public? No it's implicit
 Do I need to specify member types? Most of the time you don't, as they can be implicit
*/
