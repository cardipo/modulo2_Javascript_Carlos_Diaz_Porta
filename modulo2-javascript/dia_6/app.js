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

// let calculator={
// read() {
//  this.num1=   +prompt(`intrduce n1:`,``);
//  this.num2=   +prompt(`intrduce n2:`,``);
// },
// sum(){
// return(this.num1+this.num2);

// },
// mul(){
// return(this.num1*this.num2);

// }

// }

// calculator.read();
// alert(calculator.sum())
// alert(calculator.mul())

/*SALUDA*/

// function Salute (hi,quien){
//     this.saludo=hi(quien);
//     this.quien=quien;
// }

// let salute = new Salute(name => "Hi " + name, "Carlos");
// alert(salute.saludo);

/*SALUDA SI ENCUENTRA UNA A*/



// function Salute (hi,quien){
//     this.saludo=function () {
//         if(quien.toLowerCase().indexOf('a') != -1){
//             return hi(quien);
//             }
//             else{
//                 return 'No encuentro la letra "a". No te saludo';
//             }
//     }
//     this.quien=quien;
    
    
// }

// let salute = new Salute(name => "Hi " + name, "Carlos");
// alert(salute.saludo());
// let salute2 = new Salute(name => "Hola " + name, "Antonio");
// alert(salute2.saludo());

// /*CREATE A NEW  ACUMULATOR*/

// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values


class Clock {
    constructor({ template }) {
      this._template = template;
    }
  
    _render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this._timer);
    }
  
    start() {
      this._render();
      this._timer = setInterval(() => this._render(), 1000);
    }
  }