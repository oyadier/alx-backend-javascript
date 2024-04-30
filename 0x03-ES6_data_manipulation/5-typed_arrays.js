/**
 * 
 * @param {Number} length 
 * @param {*Number} position 
 * @param {Number} value 
 * @returns 
 */

function createInt8TypeArray(length, position, value) {
  const buffer = new ArrayBuffer(length, position, value);
  const intView = new Int8Array(buffer);
  intView[position] = value;

  return new DataView(buffer);
}

export default createInt8TypeArray;
