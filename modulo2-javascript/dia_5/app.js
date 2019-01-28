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

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
  

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  alert(menu); 
  