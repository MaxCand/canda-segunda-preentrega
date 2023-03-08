//Contraseña de acceso
const PASS = 1234;

//Objetos
class Juego {
  constructor(nombre, genero, precio, anio, plataforma) {
    (this.nombre = nombre),
      (this.genero = genero),
      (this.precio = precio),
      (this.anio = anio),
      (this.plataforma = plataforma);
  }
}

const carmagedon = new Juego("Carmagedon", "Carreras", 4500, 2022, "PC");
const mortalKombat3 = new Juego("Mortal Kombat 3", "Lucha", 3000, 1995, "Sega");
const crash = new Juego ("Crash", "Plataformas", 2500, 2021, "Playstation")
const superMario64 = new Juego ("Super Mario 64", "Plataformas", 6000, 1996, "Nintendo" )
const zelda = new Juego ("The Legend of Zelda: Ocarina of Time", "RPG",10000, 1998, "Nintendo"  )
const finalFantasy7 = new Juego("Final Fantasy 7", "RPG", 12000,1997, "Playstation" )

//Array

let listaDeJuegos = [carmagedon, mortalKombat3, crash, superMario64, zelda, finalFantasy7]

let carrito = []

//Bienvenida
alert("¡Bienvenido a la Juegoteca!");

//Logueo
let nombreUsuario = prompt("Por favor, ingrese su nombre de usuario");
while (nombreUsuario == "") {
  alert("Nombre de usuario ingresado no es válido");
  nombreUsuario = prompt("Por favor, ingrese su nombre de usuario");
}
alert(`Hola ${nombreUsuario}!`);
let contrasenia = Number(prompt("Por favor, ingrese la contraseña"));
while (contrasenia != PASS) {
  alert("Contraseña ingresada es incorrecta");
  contrasenia = Number(prompt("Por favor, ingrese la contraseña correcta"));
}
alert("Contraseña correcta");
console.log(`El usuario ${nombreUsuario} se ha logueado correctamente`);

//ELEGIR JUEGO
let juegoelegido = prompt(`
Lista de juegos:
${carmagedon.nombre}
${mortalKombat3.nombre}
${crash.nombre}
${superMario64.nombre}
${zelda.nombre}
${finalFantasy7.nombre}

Elija el que desea llevar:

Si queres finalizar ingresa la palabra "Esc"`).toLowerCase();
while (juegoelegido != "esc") {
  switch (juegoelegido) {
    case "carmagedon":
      alert(`Elegiste el ${carmagedon.nombre}!
      Genero: ${carmagedon.genero}
      Precio: ${carmagedon.precio}
      Año: ${carmagedon.anio}
      Plataforma: ${carmagedon.plataforma}`)
  agregarJuegoCarrito(carmagedon)
      break;


    case "mortal kombat 3":
      alert(`Elegiste el ${mortalKombat3.nombre}!
      Genero: ${mortalKombat3.genero}
      Precio: ${mortalKombat3.precio}
      Año: ${mortalKombat3.anio}
      Plataforma: ${mortalKombat3.plataforma}`)
      agregarJuegoCarrito(mortalKombat3)
      break;

    case "crash":
      alert(`Elegiste el ${crash.nombre}!
      Genero: ${crash.genero}
      Precio: ${crash.precio}
      Año: ${crash.anio}
      Plataforma: ${crash.plataforma}`)
      agregarJuegoCarrito(crash)
      break;

    case "super mario 64":
      alert(`Elegiste el ${superMario64.nombre}!
      Genero: ${superMario64.genero}
      Precio: ${superMario64.precio}
      Año: ${superMario64.anio}
      Plataforma: ${superMario64.plataforma}`)
      agregarJuegoCarrito(superMario64)
      break;

      case "zelda":
        alert(`Elegiste el ${zelda.nombre}!
        Genero: ${zelda.genero}
        Precio: ${zelda.precio}
        Año: ${zelda.anio}
        Plataforma: ${zelda.plataforma}`)
        agregarJuegoCarrito(zelda)
        break;

        case "final fantasy 7":
        alert(`Elegiste el ${finalFantasy7.nombre}!
        Genero: ${finalFantasy7.genero}
        Precio: ${finalFantasy7.precio}
        Año: ${finalFantasy7.anio}
        Plataforma: ${finalFantasy7.plataforma}`)
        agregarJuegoCarrito(finalFantasy7)
        break;

    default:
      alert(
        `${juegoelegido} no es una opción válida, por favor siga las intrucciones para que podamos tomar correctamente su pedido`
      );
      break;
  }
  
  juegoelegido = prompt(`
  Lista de juegos:
  ${carmagedon.nombre}
  ${mortalKombat3.nombre}
  ${crash.nombre}
  ${superMario64.nombre}
  ${zelda.nombre}
  ${finalFantasy7.nombre}
  
  Elija el que desea llevar:

Si queres finalizar ingresa la palabra "Esc"`).toLowerCase();
}
alert(`Que buena elección ${nombreUsuario}!`)

console.log("Contenido del carrito: ")
console.log(carrito)

//Menu Prepedido

let menuPrePedido = prompt(`
Si deseas continuar con el pedido, ingresa "OK"
Si deseas eliminar algún juego del carrito, ingresa "Eliminar"`).toLowerCase()


while(menuPrePedido != "ok"){
switch (menuPrePedido){
  case "ok":
    break
  case "eliminar":
    eliminarJuego()
    menuPrePedido = prompt(`
Si deseas continuar con el pedido, ingresa "OK"
Si deseas eliminar algún juego del carrito, ingresa "Eliminar"`).toLowerCase()
    break
   default:
    alert("La opción elegida no es válida")
    menuPrePedido = prompt(`
Si deseas continuar con el pedido, ingresa "OK"
Si deseas eliminar algún juego del carrito, ingresa "Eliminar"`).toLowerCase()   
}}


//Calcular costo de envío

let distanciaEnvio = prompt(
  `Ahora vamos a calcular el costo de envío dependiendo de la distancia a la que te encuentres. Por favor, indicanos a cuantos km te encontras de la sucursal: `
  );
  
while (distanciaEnvio == "") {
  alert("Opción elegida no es válida");
  distanciaEnvio = prompt(
    `Ahora vamos a calcular el costo de envío dependiendo de la distancia a la que te encuentres. Por favor, indicanos a cuantos km te encontras de la sucursal: `
    );
  }
  
  let costoEnvio = calcularCostoEnvio(distanciaEnvio)
  alert("El costo del envío es de: " +  costoEnvio + "$");
  console.log("El costo de envío es de: " + costoEnvio)
  

//Datos de domicilio

  let domicilio = prompt(
    `${nombreUsuario}, por favor, ingresa tu domicilio a continuación para que el reparto pueda pasar por tu casa a entregarte el pedido: `
);

//Día de entrega

let diaDeEntrega =
prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:

jueves
viernes
sabado
domingo 
`).toLowerCase();

while (
  diaDeEntrega != "jueves" &&
  diaDeEntrega != "viernes" &&
  diaDeEntrega != "sabado" &&
  diaDeEntrega != "domingo"
  ) {
    if (
      diaDeEntrega == "lunes" ||
      diaDeEntrega == "martes" ||
      diaDeEntrega == "miercoles"
      ) {
        alert(
          "Ups, ese día no contamos con entrega :( Por favor elije uno de los días sugeridos:"
          );
          diaDeEntrega =
          prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:
          
          jueves
          viernes
          sabado
          domingo 
          `).toLowerCase();
        } else {
          alert(
            `${diaDeEntrega} no es una opcíón válida. Por favor, lee las indicaciones atentamente`
    );
    diaDeEntrega =
    prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:
    
    jueves
    viernes
    sabado
    domingo 
    `).toLowerCase();
  }
}

//Despedida

alert(
  `Muchas gracias ${nombreUsuario}!, recibiras el pedido en ${domicilio} el día ${diaDeEntrega}. Vuelva prontos!`
  );
  console.log(
    "Se entregará en el domicilio: " + domicilio + " el día: " + diaDeEntrega
    );
    
console.log("Resumen del pedido: ")
carrito.forEach(juego => {console.log(`
Juego: ${juego.nombre}
Precio: ${juego.precio}
`)})

let precioTotal = carrito.reduce(
  (acumulador, juego) => acumulador + juego.precio,
  0
);
console.log(`El precio total es de: ${precioTotal}`)

//Funciones

function calcularCostoEnvio(distancia) {
  let costoEnvio = distancia * 150;
  return costoEnvio;
}

function agregarJuegoCarrito (juego){
  console.log(juego.nombre + " agregado al carrito.")
  carrito.push(juego)
}

function eliminarJuego(){
  let nombre = prompt("Ingrese el nombre del juego")
  let juego = carrito.find(juego => juego.nombre == nombre)
  let indice = carrito.indexOf(juego)
  carrito.splice(indice, 1)
  alert(`Eliminado!`)
  console.log("Contenido del carrito: ")
  console.log(carrito)
}


