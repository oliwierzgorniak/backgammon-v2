import * as THREE from "three";
import Store from "../../Store";
import getCheckerZPos from "./getCheckerZPos";
import { COLOR_BOARD_LIGHT } from "../consts";

export default function handleCheckerMove(target) {
  const parent = target.parent;
  const index = parent.userData.index;
  if (!Store.availableMoves.includes(index)) return;

  const { x } = parent.position;
  Store.selectedChecker.position.x = x;
  Store.selectedChecker.position.z = getCheckerZPos(parent);
  Store.selectedChecker.userData.segment = index;
  Store.selectedChecker.material.color = new THREE.Color(
    Store.selectedChecker.userData.originalColor
  );
  Store.triangles.forEach((triangle) => {
    triangle.material.color = new THREE.Color(COLOR_BOARD_LIGHT);
  });
}
