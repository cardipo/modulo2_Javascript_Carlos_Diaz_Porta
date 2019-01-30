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

/*EJERCICIO 2*/

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );

/*Truncate the text. Terminarlo*/

// function truncate(str,maxlength){
//     return(str.length>maxlength)?
// str.slice(0,maxlength -1)+`…`:str;
// }

// prompt('Escribe una cadena de caracteres',str);
// prompt(`Escribe un numero`,${maxlenght});


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggie")