export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    this._size = value;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](val) {
    if (val === 'number') {
      return this.size;
    }
    if (val === 'string') {
      return this.location;
    }
    return this;
  }
}
