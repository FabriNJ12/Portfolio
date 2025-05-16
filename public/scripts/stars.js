

import * as THREE from "three";


// 1. Crear escena, cámara y renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  1, // aspect se ajusta luego
  0.1,
  100
);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio); // mejor calidad retina

const container = document.createElement("div");
container.className = "stars";
container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100dvw";
container.style.height = "100%";
container.style.zIndex = "-1"
container.style.pointerEvents= 'none';
container.style.opacity= '1';




// Añadir el canvas al contenedor y luego al body
container.appendChild(renderer.domElement);
document.body.appendChild(container);

// 3. Ajustar tamaño del renderer al tamaño del contenedor
function resizeRenderer() {
  const { clientWidth, clientHeight } = container;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(clientWidth, clientHeight);
}
resizeRenderer(); // llamada inicial

// 4. Estrellas: geometría + material
const starCount = 1000; // ajustá esto para la densidad
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i += 3) {
  const radius = 1.2;
  const phi = Math.random() * 2 * Math.PI;
  const costheta = Math.random() * 2 - 1;
  const u = Math.random();

  const theta = Math.acos(costheta);
  const r = radius * Math.cbrt(u);

  starPositions[i] = r * Math.sin(theta) * Math.cos(phi);
  starPositions[i + 1] = r * Math.sin(theta) * Math.sin(phi);
  starPositions[i + 2] = r * Math.cos(theta);
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.002, // tamaño relativo
  sizeAttenuation: true,
  transparent: true,
  opacity: 0.3, // opacidad de las estrellas
  depthWrite: false,
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

// 5. Animación
function animate() {
  requestAnimationFrame(animate);
  stars.rotation.x -= 0.0002; // velocidad eje X
  stars.rotation.y -= 0.0007; // velocidad eje Y
  renderer.render(scene, camera);
}
animate();

// 6. Responsivo
window.addEventListener("resize", resizeRenderer);
