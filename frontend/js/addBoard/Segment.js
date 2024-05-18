import * as THREE from "three";
import {
  COLOR_BOARD_DARK,
  HORIZONTAL_GAP,
  SEGMENT_HEIGHT,
  SEGMENT_WIDTH,
} from "./consts.js";
import Triangle from "./Triangle.js";
import Store from "../Store.js";
import getCheckerZPos from "./segment/getCheckerZPos.js";

export default class Segment extends THREE.Object3D {
  constructor(x, z, index, isRotated = false) {
    super();

    this.userData.index = index;

    this.geometry = new THREE.PlaneGeometry(SEGMENT_WIDTH, SEGMENT_HEIGHT);
    this.material = new THREE.MeshStandardMaterial({
      color: COLOR_BOARD_DARK,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    const triangle = new Triangle(0, 0, index);

    this.position.x = x;
    this.position.z = z + SEGMENT_HEIGHT / 2 + HORIZONTAL_GAP / 2;

    this.rotation.x = -(Math.PI * 2) / 4;
    if (isRotated) {
      this.rotation.z = (Math.PI * 2) / 2;
      this.position.z -= SEGMENT_HEIGHT + HORIZONTAL_GAP;
    }
    this.position.y = 0.5;

    // console.log(triangle.userData);
    this.add(triangle);
    this.add(this.mesh); // Add the mesh to the object

    this.addClickListener();
  }

  addClickListener() {
    Store.interactionManager.add(this.mesh);
    this.mesh.addEventListener("click", async (e) => {
      e.stopPropagation();
      const target = e.target;
      const parent = target.parent;
      const { x } = parent.position;
      Store.selectedChecker.position.x = x;
      Store.selectedChecker.position.z = getCheckerZPos(parent);
      Store.selectedChecker.userData.segment = parent.userData.index;

      // const triangle = parent.children[0];
      // triangle.material.color = new THREE.Color(0, 0, 0);
    });
  }
}
