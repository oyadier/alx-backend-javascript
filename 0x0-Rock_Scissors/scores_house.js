/**
 *
 * @param {String} user output based on his/her selection
 * @param {String*} computer options
 */
function score(user, computer) {
  let winner;
  if (
    (user === "Scissors" && computer === "Stone") ||
    (user == "Stone" && computer === "Paper") ||
    (user === "Paper" && computer === "Scissors")
  ) {
    console.log(`User seleted: ${user}.\n Computer selected: ${computer}.`);
    winner = `Computer Won!`;
  } else if (user === computer) {
    console.log(`User seleted: ${user}.\n Computer selected: ${computer}.`);
    winner = "A draw game!";
  } else
   winner = "User Won!";
  console.log(`User seleted: ${user}.\n Computer selected: ${computer}.`);
console.log(winner)
}
export default score;