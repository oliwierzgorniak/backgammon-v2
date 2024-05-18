import Store from "../../Store";
import { CHECKER_WIDTH } from "../../addCheckers/consts";
import { HORIZONTAL_GAP, SEGMENT_HEIGHT } from "../consts";

export default function getCheckerZPos(segment) {
  const checkersOnSegment = Store.checkers.filter(
    (c) => c.userData.segment == segment.userData.index
  );
  const nCheckers = checkersOnSegment.length;

  const offset = nCheckers * CHECKER_WIDTH;
  console.log(offset, nCheckers);

  if (segment.userData.index < 12) {
    return offset - SEGMENT_HEIGHT + CHECKER_WIDTH / 2 - HORIZONTAL_GAP / 2;
  } else {
    return -offset + SEGMENT_HEIGHT - CHECKER_WIDTH / 2 + HORIZONTAL_GAP / 2;
  }
}
