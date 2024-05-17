import * as THREE from "../../libs/three.module.min.js";
import {
  BOARD_DEPTH,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  COLOR_BOARD_DARK,
} from "./consts.js";

export default class Base extends THREE.Object3D {
  constructor() {
    super();

    this.geometry = new THREE.BoxGeometry(
      BOARD_WIDTH,
      BOARD_HEIGHT,
      BOARD_DEPTH
    );
    this.position.z = -BOARD_HEIGHT / 2;
    this.material = new THREE.MeshStandardMaterial({ color: COLOR_BOARD_DARK });

    this.rotation.x = 100;

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh); // Add the mesh to the object
  }
}
