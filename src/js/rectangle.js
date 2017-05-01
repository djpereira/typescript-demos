import FillPattern from './fillPattern';

export default class Rectangle {

	constructor(height, width, fillPattern) {
		this.height = height;
		this.width = width;
		this.fillPattern = fillPattern;
	}

	get area() {
		return this.calcArea();
	}

	get perimeter() {
		return 2 * (this.height + this.width);
	}

	get diagonal() {
		return Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
	}

	calcArea() {
		return this.height * this.width;
	}

}

const square = new Rectangle(10, 10, FillPattern.HorizontalLines);
const square2 = new Rectangle(10, 'c', 'DOTS');
const square3 = new Rectangle(10);
square.height = 3;
square2.calcArea();
square3.perimetre();
console.log(square.area);
