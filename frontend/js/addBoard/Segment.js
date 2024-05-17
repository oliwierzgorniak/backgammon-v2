import * as THREE from "../../libs/three.module.min.js";
import { COLOR_BOARD_LIGHT, SEGMENT_HEIGHT, SEGMENT_WIDTH } from "./consts.js";

export default class Segment extends THREE.Object3D {
  constructor(x, y) {
    super();

    const segmentShape = new THREE.Shape();
    segmentShape.moveTo(x, y);
    segmentShape.lineTo(x + SEGMENT_WIDTH, y);
    segmentShape.lineTo(x + SEGMENT_WIDTH / 2, y + SEGMENT_HEIGHT);
    // segmentShape.lineTo(x, y);

    this.rotateX(-90);

    this.geometry = new THREE.ShapeGeometry(segmentShape);
    this.material = new THREE.MeshStandardMaterial({
      color: COLOR_BOARD_LIGHT,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh); // Add the mesh to the object
  }
}
