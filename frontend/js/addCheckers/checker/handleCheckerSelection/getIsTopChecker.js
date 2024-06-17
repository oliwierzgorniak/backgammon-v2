import Store from "../../../Store.js";

export default function getIsTopChecker(target) {
  const { segment, level } = target.userData;
  const checkersOnSegment = Store.checkers.filter(
    (checker) => checker.userData.segment === segment
  );
  return checkersOnSegment.length - 1 === level;
}
