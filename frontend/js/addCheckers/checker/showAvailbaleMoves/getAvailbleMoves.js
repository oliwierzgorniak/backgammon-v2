import filterOccupiedPositions from "./filterOccupiedPositions";
import Store from "../../../Store";

export default function getAvailableMoves(checker) {
  const checkerColor = checker.userData.color;
  const checkerSegment = checker.userData.segment;

  let diceNumbers = [];
  if (Store.movesDice.length == 1) {
    diceNumbers = Store.movesDice[0];
  } else if (Store.movesDice.length > 1) {
    diceNumbers =
      Store.movesDice[0] == Store.movesDice[1]
        ? [Store.movesDice[0]]
        : Store.movesDice;
  }

  let availableMoves = [];

  diceNumbers.forEach((n) => {
    if (checkerColor == 0) {
      const potentialMove = checkerSegment + n;
      if (potentialMove <= 23) {
        availableMoves.push(potentialMove);
      }
    } else {
      const potentialMove = checkerSegment - n;
      if (potentialMove >= 0) {
        availableMoves.push(potentialMove);
      }
    }
  });

  // filtering occupied positions
  return filterOccupiedPositions(availableMoves, checkerColor);
}
