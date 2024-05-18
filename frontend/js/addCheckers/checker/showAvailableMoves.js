import Store from "../../Store";
import * as THREE from "three";
import { CHECKER_SELECTED_COLOR } from "../consts";

function getAvailableMoves(checker) {
  const checkerColor = checker.userData.color;
  const checkerSegment = checker.userData.segment;

  let diceNumbers = [];
  if (diceNumbers.length == 1) {
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

  return availableMoves;
}

export default function showAvailableMoves(checker) {
  Store.availableMoves = getAvailableMoves(checker);
  Store.availableMoves.forEach((index) => {
    for (const triangle of Store.triangles) {
      if (triangle.userData.index == index) {
        triangle.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
      }
    }
  });
}
