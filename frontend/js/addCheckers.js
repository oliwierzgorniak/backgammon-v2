import Store from "./Store.js";
import {
  BENCH_WIDTH,
  HORIZONTAL_GAP,
  SEGMENT_HEIGHT,
  SEGMENT_WIDTH,
} from "./addBoard/consts.js";
import Checker from "./addCheckers/Checker.js";
import { CHECKER_WIDTH } from "./addCheckers/consts.js";

export default function addCheckers() {
  Store.checkers.forEach((segment, i) => {
    segment.forEach((checker, checkerLevel) => {
      let x = 0;
      let y = 0;
      if (i < 6) {
        x = (6 - i - 1) * SEGMENT_WIDTH + SEGMENT_WIDTH / 2 + BENCH_WIDTH / 2;
        y =
          checkerLevel * CHECKER_WIDTH +
          -HORIZONTAL_GAP / 2 -
          SEGMENT_HEIGHT +
          CHECKER_WIDTH / 2;
      } else if (i < 12) {
        x = -(i - 6) * SEGMENT_WIDTH - SEGMENT_WIDTH / 2 - BENCH_WIDTH / 2;
        y =
          checkerLevel * CHECKER_WIDTH +
          -HORIZONTAL_GAP / 2 -
          SEGMENT_HEIGHT +
          CHECKER_WIDTH / 2;
      } else if (i < 18) {
        x =
          -(6 - (i - 12) - 1) * SEGMENT_WIDTH -
          SEGMENT_WIDTH / 2 -
          BENCH_WIDTH / 2;
        y =
          -checkerLevel * CHECKER_WIDTH +
          HORIZONTAL_GAP / 2 +
          SEGMENT_HEIGHT -
          CHECKER_WIDTH / 2;
      } else {
        x = (i - 18) * SEGMENT_WIDTH + SEGMENT_WIDTH / 2 + BENCH_WIDTH / 2;
        y =
          -checkerLevel * CHECKER_WIDTH +
          HORIZONTAL_GAP / 2 +
          SEGMENT_HEIGHT -
          CHECKER_WIDTH / 2;
      }

      Store.scene.add(new Checker(x, y));
    });
  });
}
