import * as THREE from "../../libs/three.module.min.js";
import { COLOR_BOARD_LIGHT, SEGMENT_HEIGHT, SEGMENT_WIDTH } from "./consts.js";

export default class Triangle extends THREE.Object3D {
  constructor(x, y) {
    super();

    const segmentShape = new THREE.Shape();
    segmentShape.moveTo(x - SEGMENT_WIDTH / 2, y - SEGMENT_HEIGHT / 2);
    segmentShape.lineTo(x + SEGMENT_WIDTH / 2, y - SEGMENT_HEIGHT / 2);
    segmentShape.lineTo(x, y + SEGMENT_HEIGHT / 2);

    this.geometry = new THREE.ShapeGeometry(segmentShape);
    this.material = new THREE.MeshStandardMaterial({
      color: COLOR_BOARD_LIGHT,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0.5);
    this.add(this.mesh); // Add the mesh to the object
  }
}
