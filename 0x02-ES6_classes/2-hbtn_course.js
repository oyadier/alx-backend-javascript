class HolbertonCourse {
  /**
     *
     * @param {name} name  is the name of the course
     * @param {length} length: this is the duration of the course
     * @param {students} students : how many of students are enrolled in the coursre
     */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (typeof students[0] !== 'string') {
      throw new TypeError('Students must be a string');
    }
    this._students = students;
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
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (typeof students[0] !== 'string') {
      throw new TypeError('Students must be a string');
    }
    this._students = students;
  }
}
export default HolbertonCourse;
