import * as THREE from "../../libs/three.module.min.js";
import {
  BOARD_DEPTH,
  COLOR_BOARD_DARK,
  HORIZONTAL_GAP,
  SEGMENT_HEIGHT,
  SEGMENT_WIDTH,
} from "./consts.js";
import Triangle from "./Triangle.js";

export default class Segment extends THREE.Object3D {
  constructor(x, z, isRotated = false) {
    super();

    this.geometry = new THREE.PlaneGeometry(SEGMENT_WIDTH, SEGMENT_HEIGHT);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    const triangle = new Triangle(0, 0);

    this.position.x = x;
    this.position.z = z + SEGMENT_HEIGHT / 2 + HORIZONTAL_GAP / 2;

    this.rotation.x = -(Math.PI * 2) / 4;
    if (isRotated) {
      this.rotation.z = (Math.PI * 2) / 2;
      this.position.z -= SEGMENT_HEIGHT + HORIZONTAL_GAP;
    }
    this.position.y = 0.5;

    this.add(triangle.mesh); // Add the mesh to the object
    this.add(this.mesh); // Add the mesh to the object
  }
}
