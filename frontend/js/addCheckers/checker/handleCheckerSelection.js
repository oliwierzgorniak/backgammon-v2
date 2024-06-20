import * as THREE from "three";
import Store from "../../Store";
import { CHECKER_SELECTED_COLOR } from "../consts";
import getIsTopChecker from "./handleCheckerSelection/getIsTopChecker";

export default function handleCheckerSelection(target) {
  if (Store.selectedChecker) {
    Store.selectedChecker.material.color = new THREE.Color(
      Store.selectedChecker.userData.originalColor
    );
    Store.selectedChecker = null;
  }
  if (!getIsTopChecker(target.parent)) return;
  Store.selectedChecker = target.parent;
  target.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
}
