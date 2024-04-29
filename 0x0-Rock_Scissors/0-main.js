import SelectedObject from "./outcome";
import { promtss, num_rounds } from "./prompts";
import score from "./scores_house";

const obj = new SelectedObject();

let input;
let rounds = num_rounds();

while (rounds > 0) {
  input = promtss();
  const user = obj.selecteObject(input);
  const computer = obj.computerObject();

 score(user, computer);
  rounds -= 1;
}
