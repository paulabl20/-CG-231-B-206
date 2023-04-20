var R =10;// RADIO INICIAL DE LA ESFERA
var Sx=2;//FACTOR EN ESCALA EN X
var Sy =3;//FACTOR EN ESCALA EN Y
var Sz= 1.5;//FACTOR EN ESCALA EN Z
var Rx=Math.PI/4;//ANGULO DE ROTACION EN RADIANES DE X
var RY=Math.PI/3;//ANGULO DE ROTACION EN RADIANES DE Y
var RZ=Math.PI/6;//ANGULO DE ROTACION EN RADIANES DE Z
var Tx=5;//DIMENSION DE TRASLACION EN X
var Ty=0;//DIMENSION DE TRASLACION EN Y
var Tz=-10;//DIMENSION DE TRASLACION EN Z


// crear esfera
var geometry=new THREE.SphereGeometry(R,32,32);
var material=new THREE.MeshBasicMaterial({color:0xfff00});
var sphere = new THREE.Mesh(geometry,material);
screen.add(sphere);

//funcion de transformacionde escala 
function escalar(objeto,x,y,z){
    objeto.scale.set(x,y,z);
}
//funcion de transformacion de rotar
function rotar(objeto, rx,ry,rz){
    objeto.rotation.set(rx,ry,rz);
}
//funcion de transformacionde escala 
function trasladar(objeto,x,y,z){
    objeto.position.set(x,y,z);
}
// aplicar transformacion
escalar(sphere ,Sx,Sy,Sz);
rotar(sphere,Rx,RY,RZ);
trasladar(sphere,Tx,Ty,Tz);

