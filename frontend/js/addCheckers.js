import Store from "./Store.js";
import Checker from "./addCheckers/Checker.js";
import getCheckerPosition from "./addCheckers/getCheckerPosition.js";

export default function addCheckers() {
  Store.checkers.forEach((segment, i) => {
    segment.forEach((_, checkerLevel) => {
      const { x, y } = getCheckerPosition(i, checkerLevel);

      const checker = new Checker(x, y);
      Store.scene.add(checker);
    });
  });
}
