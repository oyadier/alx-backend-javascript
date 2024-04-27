/**
 *
 * @param {String} firstName of the user
 * @param {String} lastName of the user
 * @returns a resolved promise with a new user
 */
function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({

      firstName,
      lastName,

    });
  });
}

export default signUpUser;
