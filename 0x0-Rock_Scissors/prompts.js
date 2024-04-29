const ui = require("readline-sync");

function promtss() {
  const input = ui.question("Enter figure between 1-3:\n");
  if (input > 2){
    promtss();
  }
  return input;
}

function num_rounds() {
  const rnds = ui.question("How many rounds?.\n");
  
  return rnds;
}

module.exports = {
  promtss,
  num_rounds,
};
