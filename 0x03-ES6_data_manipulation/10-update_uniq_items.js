function updateUniqueItems(maps) {
  for (const entries of maps.entries()) {
    const [key, value] = entries;
    if (value === 1) {
      maps.set(key, 100);
    }
  }
  return maps;
}
export default updateUniqueItems;
