function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });
    reject(Error());
  }).then(console.log('Got a response from the API'));
}
export default handleResponseFromAPI;
