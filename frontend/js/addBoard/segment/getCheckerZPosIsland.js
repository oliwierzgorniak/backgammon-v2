import { CHECKER_WIDTH } from "../../addCheckers/consts";
import { HORIZONTAL_GAP, SEGMENT_HEIGHT } from "../consts";

export default function getCheckerZPosIsland(checker) {
  const offset = checker.userData.level * CHECKER_WIDTH;

  if (checker.userData.color === 0) {
    return offset - SEGMENT_HEIGHT + CHECKER_WIDTH / 2 - HORIZONTAL_GAP / 2;
  } else {
    return -offset + SEGMENT_HEIGHT - CHECKER_WIDTH / 2 + HORIZONTAL_GAP / 2;
  }
}
