import * as THREE from "../../libs/three.module.min.js";

export default function addLights(scene) {
  const pointLight = new THREE.PointLight(0xffffff, 100);
  pointLight.position.set(0, 5, 0);
  scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
}
