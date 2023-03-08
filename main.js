//Contraseña de acceso
const PASS = 1234;

//Objetos
class Juego {
  constructor(nombre, genero, precio, anio, plataforma, id) {
    (this.nombre = nombre),
      (this.genero = genero),
      (this.precio = precio),
      (this.anio = anio),
      (this.plataforma = plataforma),
      this. id = id
  }
}

const carmagedon = new Juego("carmagedon", "carreras", 4500, 2022, "pc", 1);
const mortalKombat3 = new Juego("mortal kombat 3", "lucha", 3000, 1995, "sega", 2);
const crash = new Juego ("crash", "plataformas", 2500, 2021, "playstation", 3)
const superMario64 = new Juego ("super mario 64", "plataformas", 6000, 1996, "nintendo", 4 )
const zelda = new Juego ("the legend of zelda: ocarina of time", "rpg",10000, 1998, "nintendo", 5  )
const finalFantasy7 = new Juego("final fantasy 7", "rpg", 12000,1997, "playstation", 6 )

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


mostrarProductos()

function mostrarProductos(){
   const productos = Number(prompt (`Elija el producto que desea ingresando el número correspondiente:
  Lista de juegos:
 ${carmagedon.id}     ${carmagedon.nombre}
 ${mortalKombat3.id}     ${mortalKombat3.nombre}
 ${crash.id}     ${crash.nombre}
 ${superMario64.id}     ${superMario64.nombre}
 ${zelda.id}     ${zelda.nombre}
 ${finalFantasy7.id}     ${finalFantasy7.nombre}
 Si queres finalizar ingresa 0
  `))
  const productoElegido = listaDeJuegos.find(juego => juego.id == productos)
  if (productos != 0){
  agregarJuegoCarrito(productoElegido)
  mostrarProductos()}
}

alert(`Que buena elección ${nombreUsuario}!`)
/*

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
*/
//Funciones

function calcularCostoEnvio(distancia) {
  let costoEnvio = distancia * 150;
  return costoEnvio;
}

function agregarJuegoCarrito (juego){
  console.log(juego.nombre + " agregado al carrito.")
  carrito.push(juego)
  console.log("Carrito: ")
  console.log(carrito)
}

function eliminarJuego(){
  let nombre = prompt("Ingrese el nombre del juego")
  let juego = carrito.findIndex(juego => juego.nombre == nombre)
  carrito.splice(juego, 1)
  alert(`Eliminado!`)
  console.log("Contenido del carrito: ")
  console.log(carrito)}