import Store from "../../Store";

export default function getCheckerIslandLevel(checker) {
  const segmentToCheck = checker.userData.color === 0 ? -1 : 25;
  for (let i = 0; i < 12; i++) {
    if (
      !Store.checkers.find(
        (c) => c.userData.segment === segmentToCheck && c.userData.level === i
      )
    ) {
      console.log(i);
      return i;
    }
  }
}
