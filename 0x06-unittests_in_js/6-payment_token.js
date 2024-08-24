function getPaymentTokenFromAPI(success) {
    return new Promise(function(resolve, _reject) {
      if (success) {
        resolve({data: 'Successful response from the API'});
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
  