/*let name = prompt("Introduce tu nombre");
console.log("Bienvenido/a " + name);

function suma(x, y) {
    return x + y;    
}

function resta(x, y){
    return x - y;
}

function division(x, y) {
    return x / y;
}

function multiplicacion(x, y) {
    return x * y;
}

let n = 50

if (n % 2 === 0) {
    console.log(n + " es par");
} else {
    console.log(n + " no es par");
}


function calificacion(a) {
    if (a >= 0 && a <= 49) {
        console.log("Suspenso");
    } else if (a >= 50 && a <= 69) {
        console.log("Aprobado");
    } else if (a >= 70 && a <= 89) {
        console.log("Notable");
    } else if (a >= 90 && a <= 100)
        console.log("Sobresaliente");
}

function comparacion (a, b) {
    if (a > b) {
        console.log(a + " es mayor que " + b)        
    } else if (a < b) {
        console.log(a + " es menor que " + b);
    } else {
        console.log(a + " y " + b + " son iguales")
    }
}

function verificacion (pass) {
    if (pass.length >= 8 && pass.length <= 16) {
        console.log("contraseña valida!");
    }
}
*/

/*
let input = prompt("Ingrese un numero");

for (let i = 0; i <= 10; i++ ) {
    console.log(input * i);
}

for (let i = 1; i <= 20; i+= 2) {
    console.log(i)
}


let penultimo = 0
let ultimo = 1

console.log(penultimo);
console.log(ultimo);

for (let i = 0; i < 20; i++) {
    const suma = penultimo + ultimo;
    console.log(suma);

    penultimo = ultimo;
    ultimo = suma;
}



let randomNum = Math.ceil((Math.random() * 100));
let acierta = false;

do {
    let userNum = prompt("Ingrese el numero correcto");
   if (userNum > randomNum) {
    console.log("El numero ingresado es mayor")
   } else if (userNum < randomNum) {
    console.log("El numero ingresado es menor");
   } else if (userNum === randomNum) {
    console.log("El numero es correcto");
   }
} while (randomNum !== userNum);

*/

document.getElementById("texto").innerHTML = "Hola, mundo!";

let listItems = document.getElementsByClassName("destacado");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.backgroundColor = "yellow"    
}


let lists = document.getElementsByTagName("li").length;
let parrafo = document.getElementsByTagName("p").length;
let heading = document.getElementsByTagName("h1").length;

console.log("hay " + lists + " elementos 'li', " + parrafo + " elementos 'p', y " + heading + " elementos 'h1'.")

document.querySelector("#texto").style.color = "red";
let elementos = document.querySelectorAll(".elemento");
for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.fontSize = "64px";
    elementos[i].style.backgroundColor = "purple";
    
}