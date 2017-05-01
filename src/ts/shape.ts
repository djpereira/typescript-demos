import FillPattern from './fillPattern';

interface Shape {
  readonly area: number;
  readonly perimeter: number;
  readonly fillPattern?: FillPattern;
}

export default Shape;
