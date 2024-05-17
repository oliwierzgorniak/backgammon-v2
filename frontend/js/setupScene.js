import * as THREE from "three";
import { InteractionManager } from "three.interactive";
import { OrbitControls } from "../libs/OrbitControls.js";
import Store from "./Store.js";
import addLights from "./setupScene/addLights.js";

export default function setupScene() {
  Store.scene = new THREE.Scene();
  Store.scene.background = new THREE.Color(0x14bda9);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 70;
  camera.position.y = 100;
  camera.lookAt(0, 0, 10);

  addLights();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const orbitControls = new OrbitControls(camera, renderer.domElement);

  Store.interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(Store.scene, camera);

    orbitControls.update();
    Store.interactionManager.update();
  }
  animate();
}
