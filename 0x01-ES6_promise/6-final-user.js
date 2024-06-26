import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)])
    .then((result) => (
      result.map((o) => ({
        status: o.status,
        value: o.value === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
export default handleProfileSignup;
