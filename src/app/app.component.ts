import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rompecabezas';

  interruptores = [false, false, false, false, false];

  interruptores_cambiar = [
    [0, 3, 4], // interruptor 0
    [1, 2, 4], // interruptor 1 
    [2, 1, 3], // interruptor 2
    [3, 0, 2], // interruptor 3
    [4, 0, 1], // interruptor 4
  ];

  intentos: number = 0;

  boton(interruptor: number) {

    const botones_a_cambiar = this.interruptores_cambiar[interruptor];

    // Version 1
    // for (var i = 0; i < contrarios.length; i++) {
    //   const boton_contrario = contrarios[i];

    //   this.interruptores[boton_contrario] = !this.interruptores[boton_contrario];
    // }

    // Version 2
    botones_a_cambiar.forEach((interruptor) => {
      this.interruptores[interruptor] = !this.interruptores[interruptor];
    });


    // Version antigua
    // if (interruptor == 1) {
    //   this.interruptores[0] = !this.interruptores[0]
    //   this.interruptores[4] = !this.interruptores[4]
    //   this.interruptores[3] = !this.interruptores[3]
    // }
    // else if (interruptor == 2) {
    //   this.interruptores[1] = !this.interruptores[1]
    //   this.interruptores[2] = !this.interruptores[2]
    //   this.interruptores[4] = !this.interruptores[4]
    // }
    // else if (interruptor == 3) {
    //   this.interruptores[2] = !this.interruptores[2]
    //   this.interruptores[1] = !this.interruptores[1]
    //   this.interruptores[3] = !this.interruptores[3]
    // }
    // else if (interruptor == 4) {
    //   this.interruptores[3] = !this.interruptores[3]
    //   this.interruptores[0] = !this.interruptores[0]
    //   this.interruptores[2] = !this.interruptores[2]
    // }
    // else if (interruptor == 5) {
    //   this.interruptores[4] = !this.interruptores[4]
    //   this.interruptores[1] = !this.interruptores[1]
    //   this.interruptores[0] = !this.interruptores[0]
    // };

    this.intentos++;

  }

  reiniciar(modo: string) {

    if (modo == "normal") {
      for (var i = 0; i < this.interruptores.length; i++) {
        this.interruptores[i] = false;
        console.log("modo normal");
      }
    }
    else if (modo == "aleatorio") {
      for (var i = 0; i < this.interruptores.length; i++) {

        var numeroAleatorio = Math.floor(Math.random() * (2));

        this.interruptores[i] = numeroAleatorio == 1;
      }




      /* 
          else if (modo == "aleatorio") {
            var NumeroAleatorio = 0;
            var booleanAleatorio = true;
      
      
          for (var i = 0; i < this.interruptores.length; i++ ,
            NumeroAleatorio = Math.floor(Math.random() * (2) + 1)) {
                  this.interruptores[i] = booleanAleatorio;
                  if (NumeroAleatorio == 1) {
                    booleanAleatorio = true;
                  }
                  else if (NumeroAleatorio == 2) {
                    booleanAleatorio = false
                  } */



      console.log("modo aleatorio");

    };

    this.intentos = 0;
  }
}
