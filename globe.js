const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,300)

document.getElementById("globe").appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(5,64,64)

const material = new THREE.MeshBasicMaterial({
 wireframe:true,
 color:0x00ffcc
})

const earth = new THREE.Mesh(geometry,material)

scene.add(earth)

camera.position.z = 10

function animate(){

 requestAnimationFrame(animate)

 earth.rotation.y += 0.003

 renderer.render(scene,camera)

}

animate()
