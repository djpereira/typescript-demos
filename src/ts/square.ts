import Rectangle from './rectangle';
import Shape from './shape';

export default class Square extends Rectangle implements Shape {

  constructor(length: number) {
    super(length, length);
  }

}

/* Questions?
 Do I need to specify implements Shape? No it's implicit
*/
