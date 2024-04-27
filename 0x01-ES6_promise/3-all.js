import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser]).then(
    (resolve) => {
      console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);
    },
  ).catch(() => {
    console.log('Signup system offline');
  });
}
export default handleProfileSignup;
