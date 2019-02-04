// /*
//  * Aquí podéis hacer los ejercicios y
//  * practicar Javascript!
//  */

// let i;
// let j;
// let n= prompt("Escribe un número","");
// alert(`Èl numero es: ${n}`);
// proxprimo:for(i=2;i<=n;i++){
//     for(j=2;j<i;j++){
    
//     if (i%j==0) continue proxprimo;
     
//     }
//     alert(i);
// }   

/* EJERCICIO 10   Acabarlo*/

// var resultado = arr.reduce(funcion[, valorInicial]);


// function getAverageAge(users){

//     return users.reduce(function(valorAnterior, valorActual, indice, vector){
//         return valorAnterior + valorActual.age;
//       }, 0);
//     }
    
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr)/users.length ); // (25 + 30 + 29) / 3 = 28


/* Ejercicio 2*/


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4); 

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)
// function filterRange(arr, a, b) {
//     // added brackets around the expression for better readability
//     return arr.filter(item => (a <= item && item <= b));
//   }
  
/*SUM THE PROPIERIES*/


// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum;
//   }
  
//   let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250
//   };
  
//   alert(sumSalaries(salaries)); // 650
  

// Count properties, ej 2
// Escribe una función count(obj) que devuelve el número de propiedades en el objeto:

// let user = {
//   name: "John",
//   age: 30
// };                                  /*Object.keys(user) = ["name", "age"]********/

// alert(count(user)); // 2
// Intenta hacer el código lo más corto posible.

// PD: Ignora las propiedades simbólicas, cuenta solo las "regulares"


//     function count(obj) { 
//         return Object.keys(obj).length;
//       }
      



// let user = {
//     name: "John",
//     age: 30
//   }
  
//   alert(count(user)); // 2
  
/*EJERCICIOS DESESTRUCTURACION
Destructuring assignment
Tenemos un objeto:

let user = {
  name: "John",
  years: 30
};
Escribe la tarea de desestructuración que dice:

propiedad name en la variable name.
propiedad years en la variable age.
propiedad isAdmin en la variable isAdmin (falso por defecto)
Los valores después de la asignación deben ser:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false   */


// let user = {
//     name: "John",
//     years: 30
//   };


// let {name, years: age, isAdmin = false} = user;
// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false   */


// EJERCICIO:The maximal salary
// Hay un objeto salaries:

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };
// Cree la función topSalary(salaries) que devuelve el nombre de la persona mejor pagada.

// Si salaries está vacío, debería devolvernull.
// Si hay varias personas mejor pagadas, devuelva cualquiera de ellas.
// PD Use Object.entries y la desestructuración para iterar sobre pares clave/valor.

// function topSalary(wages) {

//     let max = 0;
//     let maxName = null;
  
//     for(let [name, salary] of Object.entries(wages)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
//   }
  

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250
//   };
  
//   alert(topSalary(salaries));



/*EJERCICIO DATES

Create a date
Cree un objeto Date para la fecha: 20 de febrero de 2012, 3:12a.m. La zona horaria es local.

Muéstralo usando alert*/

// let date = new Date(2012, 1, 20, 3, 12);
// alert(date)



/*EJERCICIO how a weekday
Escribe una función getWeekDay(date) para mostrar el día de la semana en formato corto.: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'.

Por ejemplo:

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date)); // should output "TU"

*/
function getWeekDay(date) {

let days=["su","mo","tu","we","th","fr","sa"]
