export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const value = [];
  for (const idx of array) {
    value[i] = appendString + idx;
    i += 1;
  }
  return value;
}
