import Store from "../../../Store";

export default function filterOccupiedPositions(availableMoves, checkerColor) {
  return availableMoves.filter((move) => {
    const checkersOnSegment = Store.checkers.filter(
      (c) => c.userData.segment == move
    );

    if (
      checkersOnSegment.length >= 2 &&
      checkersOnSegment[0].userData.color != checkerColor
    ) {
      return false;
    }

    if (checkersOnSegment.length == 5) return false;

    return true;
  });
}
