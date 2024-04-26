class HolbertonCourse {
  /**
     *
     * @param {name} name  is the name of the course
     * @param {length} length: this is the duration of the course
     * @param {students} students : how many of students are enrolled in the coursre
     */
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }else {
        throw new TypeError("Name must be a string")
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
        throw new TypeError("Length must be a number")
    }
    if (typeof students[0] === 'string'){
         this._students = students;
    } 
   
  }
  /**
 *
 * @returns course name
 */

  get name() {
    return this._name;
  }

  /**
 *
 * @returns course length
 */
  get length() {
    return this._length;
  }

  /**
   *
   * @returns array of students reading it
   */
  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (typeof students[0] === 'string') {
      this._students = students;
    }
  }
}
export default HolbertonCourse;
