function uploadPhoto(fileName) {
  return new Promise((_, reject) => {
    reject(Error(`${fileName} cannot be processed`));
  });
}
export default uploadPhoto;
