function hasValuesFromArray(arrayList, arry) {
  for (const arrayLi of arry) {
    if (!arrayList.has(arrayLi)) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
