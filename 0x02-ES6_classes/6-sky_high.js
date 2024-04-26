import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super();
    this._sqft = sqft;
    this._floor = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floor;
  }

  set sqft(value) {
    this._sqft = value;
  }

  set floors(value) {
    this._floor = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floor} floors`;
  }
}
