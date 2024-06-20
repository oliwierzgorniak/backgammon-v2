import { CHECKER_WIDTH } from "../../../addCheckers/consts";
import getCheckerIslandLevel from "../getCheckerIslandLevel";
import getCheckerZPosIsland from "../getCheckerZPosIsland";
import Store from "../../../Store";

export default function handleCapturing(segmentIndex) {
  const checkersOnSegment = Store.checkers.filter(
    (checker) => checker.userData.segment === segmentIndex
  );

  if (
    checkersOnSegment.length === 1 &&
    Store.selectedChecker &&
    checkersOnSegment[0].userData.color !== Store.selectedChecker.userData.color
  ) {
    checkersOnSegment[0].userData.level = getCheckerIslandLevel(
      checkersOnSegment[0]
    );
    checkersOnSegment[0].position.z = getCheckerZPosIsland(
      checkersOnSegment[0]
    );

    // captured
    if (checkersOnSegment[0].userData.color === 0) {
      checkersOnSegment[0].userData.segment = -1;
      checkersOnSegment[0].position.x = CHECKER_WIDTH / 2;
    } else {
      checkersOnSegment[0].userData.segment = 25;
      checkersOnSegment[0].position.x = -CHECKER_WIDTH / 2;
    }

    console.log(checkersOnSegment[0].userData);
  }
}
