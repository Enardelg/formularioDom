/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() 
{
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  do{datosPersona.nombre = prompt("Por favor, ingresa tu nombre: ").toUpperCase()} 
  while ((datosPersona.nombre === null) || (!isNaN(datosPersona.nombre)) || (datosPersona.nombre === "") || (datosPersona.nombre.length <= 3) );
  
  do{datosPersona.edad = prompt("Ingrese su año de nacimiento: ")}
  while ((datosPersona.edad === null) || ((datosPersona.edad === '') || (!Number(datosPersona.edad)) || (datosPersona.edad.length < 4) || (datosPersona.edad.length > 4)));
  datosPersona.edad = 2022 - datosPersona.edad;

  do{datosPersona.ciudad = prompt("Por favor, ingrese la ciudad donde vive actualmente: ")}
  while ((datosPersona.ciudad === null) || (datosPersona.ciudad === "") || (datosPersona.ciudad.length <4));
  
  datosPersona.interesPorJs = (confirm("Pregunta! ¿Te interesa JavaScript?")) ? 'Sí' : 'No';

}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const spanNombre = document.querySelector('#nombre');
  const spanEdad = document.querySelector('#edad');
  const spanCiudad = document.querySelector('#ciudad');
  const spanJavaScript = document.querySelector('#javascript');
  spanNombre.innerText = datosPersona.nombre;
  spanEdad.innerText = datosPersona.edad;
  spanCiudad.innerText = datosPersona.ciudad;
  spanJavaScript.innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let divImgen = ""
  listado.forEach(materias => {
    divImgen += `
    <div class="caja">
    <img src="${materias.imgUrl}" alt ="${materias.lenguajes}">
    <p>Lenguajes: ${materias.lenguajes}</p>
    <p>Bimestre: ${materias.bimestre}</p>
    </div>`
  })
  let divFila= document.querySelector('#fila')
  divFila.innerHTML = divImgen
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.body.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const parrafo = document.querySelector('#sobre-mi')
document.addEventListener('keydown',(e) =>{
  if((e.key.toUpperCase() === "F")){
    parrafo.classList.toggle('oculto')
  } 
  });

