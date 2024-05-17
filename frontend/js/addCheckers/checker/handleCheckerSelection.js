import * as THREE from "three";
import Store from "../../Store";
import { CHECKER_SELECTED_COLOR } from "../consts";

export default function handleCheckerSelection(target, originalColor) {
  if (Store.selectedChecker) {
    Store.selectedChecker.material.color = new THREE.Color(originalColor);

    if (Store.selectedChecker.uuid != target.uuid) {
      Store.selectedChecker = target;
      target.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
    } else {
      Store.selectedChecker = null;
    }
  } else {
    Store.selectedChecker = target;
    target.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
  }
}
