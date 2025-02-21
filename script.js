
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








