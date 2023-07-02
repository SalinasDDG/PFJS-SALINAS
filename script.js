
   // clase Trabajador
   class Trabajador {
    constructor(id, nombre, areaTrabajo, sueldoNeto) {
     this.id = id;
     this.nombre = nombre;
     this.areaTrabajo = areaTrabajo;
     this.sueldoNeto = sueldoNeto;
    }
   }
    //lista de trabajadores
   const trabajador1 = new Trabajador("A", "Estefania", "Publicidad", 10000);
   const trabajador2 = new Trabajador("B", "Terry", "Publicidad", 10000);
   const trabajador3 = new Trabajador("C", "Christian", "Producción", 15000);
   const trabajador4 = new Trabajador("D", "Martin", "Producción", 15000);
   const trabajador5 = new Trabajador("E", "Anabelle", "Administración", 12000);
   const trabajador6 = new Trabajador("F", "David", "Administración", 12000);
   
   //arrays de trabajadores
   const TRABAJADORES = [trabajador1, trabajador2, trabajador3, trabajador4, trabajador5, trabajador6];

   //para logueo
   class Usuario {
    constructor(id, nombre, contraseña) {
     this.id = id;
     this.nombre = nombre;
     this.contraseña = contraseña;
    }}

  //lista de usuarios
  const usuario1 = new Usuario("CL", "Claudio", "4321");
  const usuario2 = new Usuario("RH", "Recursos Humanos", "4321");

  //arrays de ususarios
  const USUARIOS = [usuario1, usuario2]

  

//logueo
const btnVerLogin = document.querySelector("#btnVerLogin")
btnVerLogin.onclick = () => {
  document.getElementById("verLogin").style.display = "block"
}
const formularioLogin = document.getElementById("formularioLogin")

formularioLogin.onsubmit = (e) => {
  e.preventDefault()
  let dataForm = e.targuet

  let userID = document.querySelector("#userID")

  let userCoincidencia = USUARIOS.find(elem => elem.id == userID.value.toUpperCase())

  if(userCoincidencia !== undefined){
    
    let userPass = document.querySelector("#userPass")

    let divLogin = document.getElementById("verLogin")

    if(userCoincidencia.contraseña == userPass.value){
      divLogin.innerHTML = `<h4>¡Ingresaste como ${userCoincidencia.nombre}!</h4>`
      swal ( `¡Bienvenido ${userCoincidencia.nombre}!` , " ¡Haga click en el boton para continuar! " , "success",)   ;
      elegirTrabajador()

      btnVerLogin.style.display = "none"
      sacarDespues.style.display = "none"
      sacarDespues2.style.display = "none"

    }else{ swal ( "¡Contraseña incorrecta! " , " ¡Intente nuevamente! " , "error")
  }
  }else{ swal ("¡El ususrio no es correcto! " , " ¡Intente nuevamente! " , "error")
}}

//eleccion del usuario
function elegirTrabajador(){
const cardSeleccionador = document.getElementById("seleccionDeTrabajador");
    cardSeleccionador.innerHTML = 
  `<div class="card">

    <div class="card-body">
      <h5 class="card-title">Por favor coloque el ID del trabajador a evaluar:</h5>
      <p class="card-text"> Los trabajadores activos son: 
      <br>"A" - "Estefania"
      <br>"B" - "Steff"
      <br>"C" - "Christian"
      <br>"D" - "Martin"
      <br>"E" - "Anabelle"
      <br>"F" - "David"
      </p>

      <input type="text" placeholder="Escriba un ID" id="selector">

      <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary"
      onclick="crearCardTrabajador()">Seleccionar</button>

      <button type="button" class="btn btn-primary"
      onclick="renderizarTrabajadores(TRABAJADORES)">Mostrar Todos</button>
    </div>

    </div></div>`
 

  }

 //crear card individual del trabajador 
function crearCardTrabajador(){
  let idtrabajador = document.querySelector("#selector").value.toUpperCase()
  let divCardIndividual = document.getElementById("cardTrabajadores")

 let trabajadorElegido = TRABAJADORES.find( elem => elem.id == idtrabajador)
 if(idtrabajador == ""){
  selector.style.border = "3px solid red"
  setTimeout(()=>{
    selector.style.border = ""
  }, 2000)
}if(trabajadorElegido == undefined ){
  selector.style.border = "3px solid red"
  setTimeout(()=>{
    selector.style.border = ""
  }, 2000)
}else{
 divCardIndividual.innerHTML = 
  `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h3 class="card-title">${trabajadorElegido.nombre}</h3>
    </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID del trabajador: ${trabajadorElegido.id}</li>
      <li class="list-group-item">Pertenece al area de ${trabajadorElegido.areaTrabajo}</li>
      <li class="list-group-item">Sueldo base de $${trabajadorElegido.sueldoNeto}</li>
    </ul>
    <div class="card-body">
    <div class="d-grid gap-2">
    <button class="btn btn-outline-warning" type="button" onclick="verCalendario('${trabajadorElegido.id}')" >Faltas y llegadas tardia</button>
  
    <button class="btn btn-outline-primary" type="button" onclick="registroLS()">VER SUELDO MES</button>
    </ div>
    </div>
  </div>`}

}

//mostrar todos los trabajadores 
function renderizarTrabajadores(arrayTrabajadores){
    const cardTrabajadores = document.getElementById("cardTrabajadores")

    arrayTrabajadores.forEach((trabajador => {

    let divCard = document.createElement("div")
    divCard.id = trabajador.id
    divCard.innerHTML = 
    `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${trabajador.nombre}</h3>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">ID del trabajador: ${trabajador.id}</li>
    <li class="list-group-item">Pertenece al area de ${trabajador.areaTrabajo}</li>
    <li class="list-group-item">Sueldo base de $${trabajador.sueldoNeto}</li>
  </ul>
  <div class="card-body">
  <div class="d-grid gap-2">
  <button class="btn btn-outline-warning" type="button" onclick="verCalendario('${divCard.id}')" >Faltas y llegadas tardia</button>

  <button class="btn btn-outline-primary" type="button" onclick="registroLS()">VER SUELDO MES</button>
</ div>
  </div>
</div>
  `
  cardTrabajadores.append(divCard)
}))
}


//anotar faltas y llegadas tarde, desplegar calendario
function verCalendario(idTrabajador){
let trabajadorAEvaluar = TRABAJADORES.find(e => e.id == idTrabajador)

const cardCalificador = document.getElementById("calendario")
cardCalificador.innerHTML =
`<div class="cardsCalendario">
<div class="card " >
  <h4>Mes Pasado </h4>
<div class="calendario" >
  <ol class="dias">
    <li class="diaNombre">L</li>
    <li class="diaNombre">M</li>
    <li class="diaNombre">M</li>
    <li class="diaNombre">J</li>
    <li class="diaNombre">V</li>
    <li class="diaNombre">S</li>
    <li class="diaNombre">D</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
  </ol>
</div>
</div>

<div class="card">
<div class="inputsCalend">

<h5 class="card-header">Indique los dias que falto y llego tarde ${trabajadorAEvaluar.nombre}:</h5>
<p class= "textp">( Por favor complete todo el formulario sin exeder la cantidad de dias habiles en el mes y solo con faltas injustificadas) </p> 

<div class="card-body" id="TardeForm" >
<input class="imputCalend" type="number" placeholder="Confirme sueldo base" id="SBElegido">
<input class="imputCalend" type="text" placeholder="Mes" id="mesElegido">
<input class="imputCalend" type="number" placeholder="Llegadas Tarde" id="numeroTarde">
<input class="imputCalend" type="number" placeholder="Faltas injustificadas" id="numeroFaltas">
<input type="submit" class="btn btn-info" value="Ingresar" onclick="calculoAdicionales()">

<div id="faltas"></div>
</div>

</div>
</div>
<div class="card" id="mensajesResumen">
<div class="card-body" id="mensajes">

<div><h4 class="card-header">Resumen de ${trabajadorAEvaluar.nombre}:</h4></div>

<div id="mensajeResumen"></div>

<div id="mensajesDescuentos"></div>

<div id="calculoSueldomes">
  
</div>

<button type="button" class="btn btn-primary" onclick="registroLS()">Ver Guardados</button>
</div>`
}

function validateForm(){
  let tomarSB = document.querySelector("#SBElegido").value
  let mes  = document.querySelector("#mesElegido").value.toUpperCase()
  let faltas  = document.querySelector("#numeroFaltas").value
  let tardes  = document.querySelector("#numeroTarde").value

  if(tomarSB == ""){
    SBElegido.style.border = "3px solid red"
      setTimeout(()=>{
        SBElegido.style.border = ""
      }, 2000)
      return false;}
  if(mes == ""){
    mesElegido.style.border = "3px solid red"
      setTimeout(()=>{
        mesElegido.style.border = ""
      }, 2000)
      return false;}
  if(tardes == ""){
    numeroTarde.style.border = "3px solid red"
    setTimeout(()=>{
      numeroTarde.style.border = ""
    }, 2000)
    return false;}
  if(faltas == ""){
    numeroFaltas.style.border = "3px solid red"
    setTimeout(()=>{
    numeroFaltas.style.border = ""
}, 2000)
    return false;}
  return true;
}

function calculoAdicionales(){
    let mensaje = document.querySelector("#mensajeResumen")
    let mensajeDiv = document.querySelector("#mensajesResumen")
    let mensajeRes = document.querySelector("#mensajesDescuentos")
    let sueldoBaseTrabajador = document.querySelector("#SBElegido").value
    let divCalculo = document.querySelector("#calculoSueldomes")
    let mes  = document.querySelector("#mesElegido").value
    let tardes  = document.querySelector("#numeroTarde").value
    let faltas  = document.querySelector("#numeroFaltas").value

    let bono = 2500;
    let presentismo = Number(faltas) * Number(sueldoBaseTrabajador) / 25 ;
    let conBono = Number(sueldoBaseTrabajador) + Number(bono * 2);
    let sinPresentismo = Number(sueldoBaseTrabajador) + 2500;
    let sinNada = Number(sueldoBaseTrabajador) - Number(presentismo);

    if(validateForm() == true) {
  
      mensajeDiv.style.display = "block"
      mensaje.innerHTML = 
      `<h6>En el mes de ${mes} llegó ${tardes} veces tarde y faltó ${faltas} veces. 
      </h6>`

      if(faltas == 0){
        if(tardes <= 3){
          mensajeRes.innerHTML =
        `<p>-Por haber cumplido con el objetivo este mes recibe el bono completo de presentismo.</p>`
        divCalculo.innerHTML =
        `<h4>El sueldo final del mes es de: "$ ${conBono}"</h4>`}
        else{
          mensajeRes.innerHTML =
          `<p>-Por no haber faltado pero haber llegado ${tardes} veces tarde este mes se le descuenta el bono por puntualidad.</p>`
          divCalculo.innerHTML =
          `<h4>El sueldo final del mes es de: $ "${sinPresentismo}"</h4>`}}
        else{
          mensajeRes.innerHTML =
        `<p>-Por haber faltado ${faltas} veces injustificadamente este mes se le descuenta el presentismo y los dias no trabajados.</p>`
        divCalculo.innerHTML =
          `<h4>El sueldo final del mes es de: $ "${sinNada}".</h4>`}
      }else{mensajeDiv.style.display = "block"
        mensaje.innerHTML =
        `<p>Por el momento no se ah cargado ningun dato del trabajador...</p>`
        
      }

}
//agregar y ver datos del local storage
function registroLS(){
  let divCard = document.getElementById("sueldosLS")
    divCard.innerHTML = 
  `<div class="card">
    <div class="card-body">
      <div class="row g-3">
      <h4>Registros guardados:</h4>
        <h>A continuacion ingrese los datos del mes para poder guardarlos o presione "Mostrar Todos" para ver los registros de meses anteriores:</h>
        <div class="col-sm-7" id="contenidoForm">
          <input type="text"  placeholder="Nombre" id="frNombre" >

          <input type="text"  placeholder="Mes" id="frMes">

          <input type="number"  placeholder="Sueldo" id="frSueldo">
        <div> 
          <button type="button" class="btn btn-info" onclick="agregarenLS() ">Guardar</button>
          <button type="button" class="btn btn-info" onclick="agregarenTabla() ">Mostrar Todos</button>
        </div>
        </div>
      </div>

      <table class="table table-bordered border-primary" id="tableBody">
        
      <thead>
      <tr>
        <th scope="">Nombre</th>
        <th scope="">Mes</th>
        <th scope="">Sueldo</th>
      </tr>
    </thead>

    </table>
    </div>
  </div>`
  }

  function validacionForm(){
    let nombreFR = document.querySelector("#frNombre").value
    let mesFR = document.querySelector("#frMes").value
    let sueldoFR = document.querySelector("#frSueldo").value

    if(nombreFR == ""){
      return false
    }if(mesFR == ""){return false}
    if(sueldoFR == ""){return false}
    else{ return true}

  }

function agregarenLS(){
  let nombreFR = document.querySelector("#frNombre").value.toUpperCase()
  let mesFR = document.querySelector("#frMes").value.toUpperCase()
  let sueldoFR = document.querySelector("#frSueldo").value

  let registro;

if(validacionForm() == true){
  if(localStorage.getItem("registro") == null){
    registro = [];
  }else{
    registro = JSON.parse(localStorage.getItem("registro"))}
  
  registro.push({nombre : nombreFR, mes : mesFR, sueldo : sueldoFR})

  localStorage.setItem("registro", JSON.stringify(registro))

}

}

function agregarenTabla(){
  let formContenido = document.querySelector("#tableBody");
 
  if(localStorage.getItem("registro") == null){
    registro = [];}
    else{
      registro = JSON.parse(localStorage.getItem("registro")) }

      registro.forEach(e =>{
      let newRow = document.createElement("tr")

      newRow.innerHTML = 
      `<tbody ><tr>
      <td>${e.nombre}</td>
      <td>${e.mes}</td>
      <td>$${e.sueldo}</td>
    </tr></tbody>
    `
    formContenido.append(newRow)
  })
  
    console.log(registro)
  
     
    
  }

