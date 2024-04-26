class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== "function") {
        throw new Error(
          "Class extending Building must override evacuationWarningMessage"
        );
      }
    }
  }

  get squareFeet() {
    return this._sqft;
  }

  set squareFeet(value) {
    this._sqft = value;
  }
}
export default Building;
