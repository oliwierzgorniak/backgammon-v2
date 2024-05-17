import * as THREE from "three";
import Store from "../Store.js";
import { COLOR0, COLOR1 } from "../addBoard/consts.js";
import { CHECKER_HEIGHT, CHECKER_WIDTH } from "./consts.js";

export default class Checker extends THREE.Object3D {
  constructor(x, z, color = 0) {
    super();

    this.geometry = new THREE.CylinderGeometry(
      CHECKER_WIDTH / 2,
      CHECKER_WIDTH / 2,
      CHECKER_HEIGHT
    );
    this.material = new THREE.MeshStandardMaterial({
      color: color == 0 ? COLOR0 : COLOR1,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(x, CHECKER_HEIGHT / 2 + 0.5, z);
    this.add(this.mesh); // Add the mesh to the object

    this.addClickListener();
  }

  addClickListener() {
    Store.interactionManager.add(this.mesh);

    this.mesh.addEventListener("click", () => {
      console.log("it works");
    });
  }
}
