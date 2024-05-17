import addBoard from "./js/addBoard.js";
import addCheckers from "./js/addCheckers.js";
import setupScene from "./js/setupScene.js";

const init = () => {
  setupScene();
  addBoard();
  addCheckers();
};

init();
