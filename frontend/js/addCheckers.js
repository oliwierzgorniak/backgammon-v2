import Store from "./Store.js";
import Checker from "./addCheckers/Checker.js";
import { CHECKERS_START } from "./addCheckers/consts.js";
import getCheckerPosition from "./addCheckers/getCheckerPosition.js";

export default function addCheckers() {
  CHECKERS_START.forEach((segment, i) => {
    segment.forEach((color, checkerLevel) => {
      const { x, y } = getCheckerPosition(i, checkerLevel);

      const checker = new Checker(x, y, i, checkerLevel, color);
      Store.checkers.push(checker);
      Store.scene.add(checker);
    });
  });
}
