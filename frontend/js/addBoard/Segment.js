import * as THREE from "../../libs/three.module.min.js";
import { COLOR_BOARD_DARK, SEGMENT_HEIGHT, SEGMENT_WIDTH } from "./consts.js";
import Triangle from "./Triangle.js";

export default class Segment extends THREE.Object3D {
  constructor(x, y) {
    super();

    this.geometry = new THREE.PlaneGeometry(SEGMENT_WIDTH, SEGMENT_HEIGHT);
    this.material = new THREE.MeshStandardMaterial({
      color: COLOR_BOARD_DARK,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    const triangle = new Triangle(x, y);
    triangle.position.y = 10;
    console.log(triangle.position);

    this.rotation.x = -(Math.PI * 2) / 4;
    this.position.y = 0.5;

    this.add(triangle.mesh); // Add the mesh to the object
    this.add(this.mesh); // Add the mesh to the object
  }
}
