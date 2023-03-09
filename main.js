
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
      (this.id = id);
  }
}

const carmagedon = new Juego("carmagedon", "carreras", 4500, 2022, "pc", 1);
const mortalKombat3 = new Juego("mortal kombat 3",  "lucha",  3000,  1995,  "sega",  2);
const crash = new Juego("crash", "plataformas", 2500, 2021, "playstation", 3);
const superMario64 = new Juego("super mario 64",  "plataformas",  6000,  1996,  "nintendo",  4);
const zelda = new Juego("the legend of zelda: ocarina of time",  "rpg",  10000,  1998,  "nintendo",  5);
const finalFantasy7 = new Juego("final fantasy 7",  "rpg",  12000,  1997,  "playstation",  6);

//Array

let listaDeJuegos = [carmagedon,  mortalKombat3,  crash,  superMario64,  zelda,  finalFantasy7,];
let carrito = [];

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

//Mostrar los productos
mostrarProductos();
// Datos de envio
let distancia = costoEnvio()
console.log(distancia)
let domicilio = prompt(
  `${nombreUsuario}, por favor, ingresa tu domicilio a continuación para que el reparto pueda pasar por tu casa a entregarte el pedido: `
);
entregaproducto();

resumenDeCompra();

//Funciones
function mostrarProductos() {
  const productos = Number(
    prompt(`Elija el producto que desea ingresando el número correspondiente:
  Lista de juegos:
 ${carmagedon.id}     ${carmagedon.nombre}
 ${mortalKombat3.id}     ${mortalKombat3.nombre}
 ${crash.id}     ${crash.nombre}
 ${superMario64.id}     ${superMario64.nombre}
 ${zelda.id}     ${zelda.nombre}
 ${finalFantasy7.id}     ${finalFantasy7.nombre}
 Si queres finalizar ingresa 0
  `)
  );
  const productoElegido = listaDeJuegos.find((juego) => juego.id == productos);
  if (productos > 0 && productos <7) {
    agregarJuegoCarrito(productoElegido);
    mostrarProductos();
  } else if(productos === 0){
    menuPrePedido()
  } else{
    alert("La opción elegida no es correcta, lea atentamente")
    mostrarProductos()
  }
}

function menuPrePedido() {
  let confirmacionPedido = prompt(`
  Si deseas continuar con el pedido, ingresa "OK"
  Si deseas eliminar algún juego del carrito, ingresa "Eliminar"`).toLowerCase();

  switch (confirmacionPedido) {
    case "ok":
      break;
    case "eliminar":
      eliminarJuego();
      menuPrePedido();
      break;
    default:
      menuPrePedido();
  }
}

function costoEnvio(){
  let distancia = Number(prompt("Ahora vamos a calcular el costo de envío dependiendo de la distancia a la que te encuentres. Por favor, indicanos a cuantos km te encontras de la sucursal"))
  if (distancia == ""){
    alert("Opción no válida")
    costoEnvio()
  } else {
    console.log("Costo de envío: ")
  return distancia * 150;}
}

function agregarJuegoCarrito(juego) {
  console.log(juego.nombre + " agregado al carrito.");
  carrito.push(juego);
  console.log("Carrito: ");
  console.log(carrito);
}

function eliminarJuego() {
  let nombre = prompt("Ingrese el nombre del juego");
  let juego = carrito.findIndex((juego) => juego.nombre == nombre);
  let existe = carrito.some((juego) => juego.nombre == nombre)
  if(existe){
  carrito.splice(juego, 1);
  alert(`Eliminado!`);
  console.log("Contenido del carrito: ");
  console.log(carrito);} else {
    alert("No se encuentra en el carrito, intente nuevamente")
    eliminarJuego()
  }
}

function entregaproducto() {
  let diaDeEntrega =
    prompt(`${nombreUsuario}, por favor indicanos cual de los siguientes días te encontras en tu domicilio. Tene en cuenta que son los únicos días que hacemos reparto:             
jueves
viernes
sabado
domingo 
`).toLowerCase();
  if (
    diaDeEntrega === "jueves" ||
    diaDeEntrega === "viernes" ||
    diaDeEntrega === "sabado" ||
    diaDeEntrega === "domingo"
  ) {
    alert(
      `Muchas gracias ${nombreUsuario}!, recibiras el pedido en ${domicilio} el día ${diaDeEntrega}. Vuelva prontos!`
    );
    console.log(
      "Se entregará en el domicilio: " + domicilio + " el día: " + diaDeEntrega
    );
  } else {
    alert(
      `${diaDeEntrega} no es una opcíón válida. Por favor, lee las indicaciones atentamente`
    );
    entregaproducto();
  }
}

function resumenDeCompra() {
  console.log("Resumen del pedido: ");
  carrito.forEach((juego) => {
    console.log(`
  Juego: ${juego.nombre}
  Precio: ${juego.precio}
  `);
  });

  let precioTotal = carrito.reduce(
    (acumulador, juego) => acumulador + juego.precio,
    0
  );
  console.log(`El precio total de los juegos es de: ${precioTotal} + ${distancia}$ de envío`);
}
