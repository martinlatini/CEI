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



let arr = ["uno", 2, true, null, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let suma = 0


for (let j = 0; j < arr2.length; j++) {
    suma += arr2[j];
}

console.log(suma);



let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
       console.log(arr3[i][j]);
    }
}



const array = [2, 4, 6, 8];
let numMayor = array[0];
let numMenor = array[0];

function num() {
    for (let i = 0; i < array.length; i++) {
        if (numMayor > array[i]) {
            numMayor = array[i]
        }

        if (numMenor < array[i]) {
            numMenor = array[i]
        }
    }
    console.log("mayor: " + numMayor + "," + "menor: " + numMenor)
}

num()



function eliminarDuplicados(array) {
    const array2 = [];

   for (let i = 0; i < array.length; i++) {
    const elementoActual = array[i];

    if (!array2.includes(elementoActual)) {
        array2.push(elementoActual);
    }
   }

   return array2;
}

// console.log(eliminarDuplicados(["hola", "adios", "hola", "gracias"]))

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let numbers2 = numbers.slice(2,5);

console.log(numbers2);

// 2

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("el array original es:", names);
let names2 = names.slice(1,3);
names.splice(1, 2);

console.log("los elementos eliminados son:", names2, "y el array que queda es", names);

//3

const letters = ["a", "b", "c", "d", "e", "f", "g"];
letters.splice(3, 2, "x", "y");

console.log(letters);

//4

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers3.copyWithin(3, 0, 2);

console.log(numbers3);


//5

const words = ["apple", "banana", "cherry", "date", "fig", "grape"];

words.fill("ok", 1, 4);

console.log(words);

//6

const numbers4 = [1, 2, 3, 7, 8, 9];
let numbers5 = [4, 5, 6];

let nuevoArray = numbers4.slice(0,3)
let nuevoArray2 = numbers4.slice(3)

let arrayDefinitivo = nuevoArray.concat(numbers5, nuevoArray2);

console.log(arrayDefinitivo);



// 1

 let array = [2, 3, 9]



const arrayModificado = array.map(function arreglo(potencia) {
    return Math.pow(potencia, 3);
})

 console.log(arrayModificado);


// 2

const array2 = [1,2,3,4,5,6]

const pares = array2.filter(function (numeros) {
    return numeros % 2 === 0;
})
    
    
console.log(pares);




const numerosArray = [0, -1, 4, -5]

const numerosNegativos = numerosArray.some(function (numero) {
    return numero < 0;
});

console.log(numerosNegativos);



const palabras = ["hola", "chau", "gracias"]

const tresCaracteres = palabras.every(function (elemento) {
    return elemento.length >= 3
})

console.log(tresCaracteres);



const obj = [
    {persona: "Luis", edad: 18}, 
    {persona: "Jose", edad: 34},
    {persona: "Mario", edad: 22}];

const masDe = obj.findIndex(function (elemento) {
    return elemento.edad > 30
})

console.log(masDe);


function square(x) {
    return x * x;
}

const function1 = x => x * x;

console.log(square(3), function1(3));

function greet(name) {
    return `hello, ${name}!`;
}

const function2 = name => `hello, ${name}!`;

function sum(a, b, c) {
    return a + b + c;
}

const function3 = (a, b, c) => a + b + c;


const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Eve', age: 35 },
    { name: 'Charlie', age: 28 }
    ];

const ordenar = (a, b) => {if (a.name > b.name) {
    return 1 
} else if (a.name < b.name){
    return -1
} else {
    return 0
}
};

const obj = people.sort(ordenar)

console.log(obj);


const cart = [
    { product: 'Apple', price: 1, quantity: 3 },
    { product: 'Banana', price: 2, quantity: 2 },
    { product: 'Orange', price: 1.5, quantity: 4 }
    ];

const sumaTotal = cart.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.price * currentValue.quantity);
}, 0);

console.log(sumaTotal);
*/

//1. Desestructura el array para obtener las tres primeras frutas y guardarlas en variables individuales.

//const fruits = ["apple", "banana", "cherry", "orange", "grape"];

//const [fruit1, fruit2, fruit3] = fruits;

//console.log(fruit1, fruit2, fruit3);

// 2. Desestructura el objeto para obtener el firstName, lastName y age. Crea una variable llamada name
// que contenga el nombre completo.
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

const { firstName, lastName, age } = person;
const name = firstName + " " + lastName;

console.log(firstName, lastName, age);
console.log("nombre completo:", name);

// 3. Desestructura el objeto data para obtener el nombre y el precio del primer producto.

const data = {
  results: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ],
};

const { results } = data;

console.log(
  `el producto del primer objeto es: ${results[0].name}, y su precio es: ${results[0].price}`
);

//4. Utiliza el Spread Operator para crear un nuevo array que combine los elementos de array1 y array2.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado);

//5. Utiliza el Spread Operator para crear un nuevo objeto que combine las propiedades de obj1 y obj2.

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

//6. Utiliza el Spread Operator para clonar el objeto user y actualizar la propiedad location a "Londres".

const user = {
  name: "Alice",
  age: 25,
  location: "París",
};

const userActualizado = { ...user, location: "Londres" };

console.log(userActualizado);


// 1.
function simpleTimer(seconds) {
  setTimeout(() => {
    console.log("Tiempo cumplido");
  }, seconds);
}

simpleTimer(1000);

//2.
let contador = 0;

function stopwatch(duration) {
  let interval = setInterval(() => {
    if (contador >= duration) {
      clearInterval(interval);
    } else {
      console.log(contador++ + 1);
    }
  }, 1000);
}

stopwatch(5);
*/
//3.

function messageInterval(messages, interval) {
  let contador = 0;
  const intervalID = setInterval(() => {
    if (contador < messages.length) {
      console.log(messages[contador++]);
    } else {
      clearInterval(intervalID);
    }
  }, interval);
}

messageInterval(["hola", "como", "estas", "bien", "vos"], 1000);
