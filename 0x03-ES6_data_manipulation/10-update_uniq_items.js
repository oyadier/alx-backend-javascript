function updateUniqueItems(maps) {
  if (!(maps instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const entries of maps.entries()) {
    const [key, value] = entries;
    if (value === 1) {
      maps.set(key, 100);
    }
  }
  return maps;
}
export default updateUniqueItems;
