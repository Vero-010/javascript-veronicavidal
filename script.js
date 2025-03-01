
//Ejercicio 1
let nombre = "Verónica";
let edad = 24;
let ciudad = "Buenos Aires";
console.log (" Mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + ciudad); 
/* CREA UNA VARIABLE LLAMADA PRECIO Y ASIGNALE UN VALOR DECIMAL. LUEGO
CREA OTRA VARIABLE LLAMADA CANTIDAD Y ASIGNALE UN VALOR ENTERO.
MUESTRE EL TIPO DE DATOS DE CADA VARIABLE EN LA CONSOLA.
*/
let precio = 3.14;
let cantidad = 5;
console.log (typeof cantidad);//imprime en la consola
document.write(typeof cantidad);//imprime en el navegador
alert(typeof cantidad);//imprime en una giventana emergente

//Ejercicio 1 ejercicios en javascript
let producto = 2000;
let descuento = 0.25;
let precioFinal = producto - (producto * descuento);
console.log(precioFinal);

//Ejercicio 2 ejercicios en javascript
let capital = 500000; 
let aumento = 0.02; 
let ganancia = capital * aumento; 
let capitalFinal = capital + ganancia;  

console.log("Ganancia después de un mes:", ganancia);  
console.log("Capital total después de un mes:", capitalFinal);


//Ejercicio 3 ejercicios en javascript
// Pedimos las notas parciales y calculamos el promedio
let nota_parcial1 = parseFloat(prompt("Ingrese la nota del primer parcial:"));
let nota_parcial2 = parseFloat(prompt("Ingrese la nota del segundo parcial:"));
let nota_parcial3 = parseFloat(prompt("Ingrese la nota del tercer parcial:"));
let promedio_parciales = (nota_parcial1 + nota_parcial2 + nota_parcial3) / 3;

// Pedimos la nota del examen final y del trabajo final
let nota_examen_final = parseFloat(prompt("Ingrese la nota del examen final:"));
let nota_trabajo_final = parseFloat(prompt("Ingrese la nota del trabajo final:"));

// Calculamos la nota final ponderada
let nota_final = (promedio_parciales * 0.55) + (nota_examen_final * 0.30) + (nota_trabajo_final * 0.15);

// Mostramos el resultado
console.log("La calificación final es: " + nota_final);
alert("La calificación final es: " + nota_final);


//Ejercicio 4 ejercicios en javascript
// Pedimos al usuario el precio de compra del artículo
let precioCompra = parseFloat(prompt("Ingrese el precio de compra del artículo:"));

// Calculamos el precio de venta agregando una ganancia del 30%
// Esto se hace multiplicando el precio de compra por 1.30 (100% + 30%)
let precioVenta = precioCompra * 1.30;

// Mostramos el resultado
console.log("El precio de venta para obtener una ganancia del 30% es: " + precioVenta);
alert("El precio de venta es: " + precioVenta);


//Ejercicio 5 ejercicios en javascript
// Definimos los costos por kilómetro y por minuto
const costoPorKilometro = 15000;
const costoPorMinuto = 2000;

// Solicitamos al usuario la cantidad de kilómetros recorridos y minutos de la carrera
let kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
let minutos = parseFloat(prompt("Ingrese la cantidad de minutos de la carrera:"));

// Calculamos el monto total a pagar
let montoCarrera = (kilometros * costoPorKilometro) + (minutos * costoPorMinuto);

// Mostramos el resultado
console.log("El monto a pagar por la carrera es: " + montoCarrera);
alert("El monto a pagar es: " + montoCarrera);

//Ejercicio 6 ejercicios en javascript
// Solicitamos al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Calculamos el cuadrado de cada número
let cuadrado1 = numero1 * numero1;
let cuadrado2 = numero2 * numero2;
let cuadrado3 = numero3 * numero3;

// Mostramos los resultados
console.log("El cuadrado del primer número es: " + cuadrado1);
console.log("El cuadrado del segundo número es: " + cuadrado2);
console.log("El cuadrado del tercer número es: " + cuadrado3);
alert("Cuadrados: " + cuadrado1 + ", " + cuadrado2 + ", " + cuadrado3);

//Ejercicio 7 ejercicios en javascript
// Solicita el presupuesto total del hospital
let presupuestoTotal = parseFloat(prompt("Ingrese el presupuesto anual del hospital:"));

// Calcula el monto para cada área
let ginecologia = presupuestoTotal * 0.40;      // 40%
let traumatologia = presupuestoTotal * 0.30;    // 30%
let pediatria = presupuestoTotal * 0.30;        // 30%

// Muestra los resultados en la consola
console.log("Presupuesto para Ginecología: " + ginecologia);
console.log("Presupuesto para Traumatología: " + traumatologia);
console.log("Presupuesto para Pediatría: " + pediatria);

// O también puedes mostrarlo con un alert
alert(
  "Ginecología: " + ginecologia + "\n" +
  "Traumatología: " + traumatologia + "\n" +
  "Pediatría: " + pediatria
);

//Ejercicio 8 ejercicios en javascript
// Pedimos el precio de compra
let preciocompra = parseFloat(prompt("Ingrese el precio de compra del artículo:"));

// Calculamos el precio de venta agregando un 30% de ganancia
let precioventa = preciocompra * 1.30; // 100% + 30% = 130% = 1.30

console.log("El precio de venta para obtener una ganancia del 30% es: " + precioventa);
alert("El precio de venta es: " + precioventa);

//Ejercicio 9 ejercicios en javascript
// Pedimos la inversión de cada persona
let inversion1 = parseFloat(prompt("Ingrese la inversión de la primera persona:"));
let inversion2 = parseFloat(prompt("Ingrese la inversión de la segunda persona:"));
let inversion3 = parseFloat(prompt("Ingrese la inversión de la tercera persona:"));

// Calculamos el total invertido
let totalInvertido = inversion1 + inversion2 + inversion3;

// Calculamos el porcentaje de cada inversión respecto al total
let porcentaje1 = (inversion1 / totalInvertido) * 100;
let porcentaje2 = (inversion2 / totalInvertido) * 100;
let porcentaje3 = (inversion3 / totalInvertido) * 100;

// Mostramos resultados
console.log("Porcentaje de la primera persona: " + porcentaje1.toFixed(2) + "%");
console.log("Porcentaje de la segunda persona: " + porcentaje2.toFixed(2) + "%");
console.log("Porcentaje de la tercera persona: " + porcentaje3.toFixed(2) + "%");

alert(
  "Porcentajes de inversión:\n" +
  "Primera persona: " + porcentaje1.toFixed(2) + "%\n" +
  "Segunda persona: " + porcentaje2.toFixed(2) + "%\n" +
  "Tercera persona: " + porcentaje3.toFixed(2) + "%"
);

//Ejercicio 10 ejercicios en javascript
// Pedimos dos números al usuario
let Numero1 = parseFloat(prompt("Ingrese el primer número:"));
let Numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pedimos la operación a realizar
let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");

let resultado;

switch (operacion) {
  case "+":
    resultado = Numero1 + Numero2;
    break;
  case "-":
    resultado = Numero1 - Numero2;
    break;
  case "*":
    resultado = Numero1 * Numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = Numero1 / Numero2;
    } else {
      resultado = "Error: No se puede dividir entre cero";
    }
    break;
  default:
    resultado = "Operación no válida";
    break;
}

console.log("El resultado es: " + resultado);
alert("El resultado es: " + resultado);

/*el usuario debe dijitar nombre y edad con la siguiente estructura de verificacion 
1 a 18 años es un joven
19 a 48 años es adulto
41 a 60 años es maduro 
61 años en adelante es anciano
*/
//estructuras de consolas
//Ejercicio 1 - declarar dos variables una que sea el nombre y la otra la edad, mostrar si es mayor de edad

let nomb = prompt("Ingrese su nombre");
let age = parseInt(prompt("Ingrese su edad"));
if (age <= 18) {
    alert("Hola: " + nomb + " Usted es una persona joven");
}
else if (age >= 19 && age <= 40) {
    alert("Hola: " + nomb + " Usted es una persona adulta");
}
else if (age >= 41 && age <= 60) {
    alert("Hola: " + nomb + " Usted es una persona madura");
}
else {
    alert("Hola: " + nomb + " Usted es una persona anciana");
}
//ciclo while
//declarar una variable numerica que muestre la cuenta regresiva a llegar a 0
let cuentaAtras = prompt("Ingrese un numero");

while (cuentaAtras > 0) {
  alert(cuentaAtras)
  cuentaAtras = cuentaAtras - 1
}

alert('¡Despegue! 🚀')

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

while (cuentaAtras > 0) {
  document.write(cuentaAtras + "</br>")

  let revisionesRealizadas = 0

  while (revisionesRealizadas < NUMERO_REVISIONES) {
  
    revisionesRealizadas = revisionesRealizadas + 1
   document.write(revisionesRealizadas + ' revisiones realizadas...' + "</br>")
  }

  cuentaAtras = cuentaAtras - 1
}
//do while 
/*imprimir 5 edades de diferentes personas y determinar si son mayores de edad*/

let N_personas = 0;

do {
    let nombre2 = prompt("Ingrese su nombre");
    let edad2 = parseInt(prompt("Ingrese su edad"));

    if (edad2 >= 18) {
        alert("Hola " + nombre2 + ", es mayor de edad");
    } else {
        alert("Hola " + nombre2 + ", es menor de edad");
    }

    N_personas++; 
} while (N_personas < 5);
//for
/* imprimir las tablas de multiplicar del numero que el usuario ingrese hasta el numero 10,
utilizando el ciclo for y mostrar en pantalla la siguiente sintaxis 
ejemplo:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/
let tabla = parseInt(prompt("Ingrese el numero de la tabla de multiplicar"));
for (let i = 1; i <= 10; i++) {
    let resultado = tabla * i;
    document.write(tabla + " x " + i + " = " + resultado + "</br>");
}








