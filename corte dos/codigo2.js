var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);//camara

camera.position.x = 50;
camera.position.y = 50;
camera.position.z = 50;

camera.rotation.set(0, 0, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);//orbitcontrols

var tam = 10;// tamaño de la primera figura
var fig =[];
var posy =  tam/2;
var posxz = tam/2
var cont = tam;

var color = [{color:0x8E44AD}, {color:0x2ECC71}, {color:0x3498DB}]; //color

for(let i=0; i<3; i++){

  var geometria = new THREE.BoxGeometry(tam,tam,tam); //boxgeometry
  var material = new THREE.MeshPhongMaterial(color[i]); //material

  fig.push(new THREE.Mesh(geometria, material)); //aplicar figura con materia

  fig[i].translateX(posxz);
  fig[i].translateZ(posxz);
  

  scene.add( fig[i] ); //agregar cubos

  tam = tam/2;
}

fig[0].translateY(cont/2);
fig[1].translateY(cont/2+(cont - (cont/4)));
fig[2].translateY(cont/2+(cont + (cont/8)));

const light = new THREE.DirectionalLight(0xCC99FF, 1); //furnte de luz
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150; //tamaño cuadricula
const divisions = 160; //cuadrados cuadricula
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions); // lineas de eje
scene.add(gridHelper);

function render() { // render
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
   //aplicacion de una luz dirrecional a la escena

   var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
   directionalLight.position.set(0, 0, -10);
   scene.add( directionalLight );

   var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
   directionalLight.position.set(0, 0, 10);
   scene.add( directionalLight );


   // tamaño de los objetos

   const dim = [[1,1,1], [2,2,2], [3,3,3]];
   var geometria = [];
   for (let i=0; i<3; i++) {
   
       geometria.push(new THREE.ConeGeometry(dim[i][2]));

   }


   // arreglo de color y material de los objetos
   const color = [ {color:0xCB8EC8}];     
   const material=[new THREE.MeshPhongMaterial(color[2])];
   

   //se aplican los arreglos de geometria y material al objeto 

   const cube =[];
   for (let i=0; i<3; i++) {
       cube.push(new THREE.Mesh(geometria[i], material[i]));
   }

   // arreglo que añade los objetos a la escena
   
   for (let i=0; i<3; i++) {
       scene.add( cube[i] );
   }

   //Desplazamiento en X de los objetos 
   
   cube[1].position.x = 3;
   cube[2].position.x = -3;

   //Posicion de la camara 

   camera.position.z = 10;

   //Funcion donde se le da el movimiento en los ejes a los objetos

   function animate() {
       requestAnimationFrame( animate );

       cube[0].rotation.x += 0.05;
       cube[0].rotation.y += 0.05;

       cube[1].rotation.x += 0.05;
       cube[1].rotation.y += 0.05;

       cube[2].rotation.x += 0.05;
       cube[2].rotation.y += 0.05;

       renderer.render( scene, camera);
   }

   animate();

render();

/*
Lista colores:
- Blanco : 0xffffff
- Morado : 0xCC99FF
*/ 