import FillPattern from './fillPattern';
import Rectangle from './rectangle';
import Shape from './shape';

export default class Square extends Rectangle implements Shape {

  constructor(length: number, public readonly fillPattern?: FillPattern) {
    super(length, length);
  }

}

/* Questions?
 Do I need to specify implements Shape? No it's implicit
*/
