import * as THREE from "three";
import Store from "../../Store";
import getCheckerZPos from "./getCheckerZPos";
import { COLOR_BOARD_LIGHT } from "../consts";
import handleCapturing from "./handleCheckerMove/handleCapturing";

export default function handleCheckerMove(target) {
  const parent = target.parent;
  const index = parent.userData.index;
  if (!Store.availableMoves.includes(index)) return;

  // checker captured
  handleCapturing(index);

  Store.selectedChecker.position.z = getCheckerZPos(parent);
  const { x } = parent.position;
  Store.selectedChecker.userData.level = Store.checkers.filter(
    (checker) => checker.userData.segment === index
  ).length;
  Store.selectedChecker.userData.segment = index;
  Store.selectedChecker.position.x = x;
  Store.selectedChecker.material.color = new THREE.Color(
    Store.selectedChecker.userData.originalColor
  );
  Store.triangles.forEach((triangle) => {
    triangle.material.color = new THREE.Color(COLOR_BOARD_LIGHT);
  });
}
