import * as THREE from "../../libs/three.module.min.js";
import Store from "../Store.js";

export default function addLights() {
  const pointLight = new THREE.PointLight(0xffffff, 100);
  pointLight.position.set(0, 100, 0);
  Store.scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  Store.scene.add(ambientLight);
}
