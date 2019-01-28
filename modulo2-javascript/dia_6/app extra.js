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

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this._precision = precision;
    }
  
    start() {
      this._render();
      this._timer = setInterval(() => this._render(), this._precision);
    }
  };
  