import * as THREE from "three";
import Store from "../../Store";
import { CHECKER_SELECTED_COLOR } from "../consts";
import getIsTopChecker from "./handleCheckerSelection/getIsTopChecker";

export default function handleCheckerSelection(target) {
  if (Store.selectedChecker) {
    const originalColor = target.parent.userData.originalColor;
    Store.selectedChecker.material.color = new THREE.Color(originalColor);

    if (Store.selectedChecker.uuid != target.parent.uuid) {
      if (!getIsTopChecker(target.parent)) return;
      Store.selectedChecker = target.parent;
      target.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
    } else {
      Store.selectedChecker = null;
    }
  } else {
    Store.selectedChecker = target.parent;
    target.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
  }
}
