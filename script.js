const nombre = "Valeria";
console.log("Hola, soy " + nombre + " - Clase 10: Condicionales");


const edad = 18;
if (edad >= 18) {
  console.log(nombre + " es mayor de edad");
} else {
  console.log(nombre + " es menor de edad");
}

const nota = 15;
if (nota >= 18) {
  console.log("Nota " + nota + ": Excelente");
} else if (nota >= 14) {
  console.log("Nota " + nota + ": Aprobado");
} else {
  console.log("Nota " + nota + ": Desaprobado");
}

const numero = Number(prompt("Ingresa un número:"));
if (numero > 0) {
  console.log("El número " + numero + " es positivo");
} else if (numero < 0) {
  console.log("El número " + numero + " es negativo");
} else {
  console.log("El número es cero");
}
