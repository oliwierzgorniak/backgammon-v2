import Store from "../../Store";
import * as THREE from "three";
import { CHECKER_SELECTED_COLOR } from "../consts";
import { COLOR_BOARD_LIGHT } from "../../addBoard/consts";
import getAvailableMoves from "./showAvailbaleMoves/getAvailbleMoves";

export default function showAvailableMoves(checker) {
  Store.availableMoves = getAvailableMoves(checker);
  Store.triangles.forEach((triangle) => {
    triangle.material.color = new THREE.Color(COLOR_BOARD_LIGHT);
  });
  Store.availableMoves.forEach((index) => {
    for (const triangle of Store.triangles) {
      if (triangle.userData.index == index) {
        triangle.material.color = new THREE.Color(CHECKER_SELECTED_COLOR);
      }
    }
  });
}
