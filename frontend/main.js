import addBoard from "./js/addBoard.js";
import addCheckers from "./js/addCheckers.js";
import setupScene from "./js/setupScene.js";
import handleDice from "./js/ui/handleDice.js";

const init = () => {
  setupScene();
  addBoard();
  addCheckers();

  // ui
  handleDice();
};

init();
