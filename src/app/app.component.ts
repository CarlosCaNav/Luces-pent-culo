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

    console.log(interruptor);
    

    const botones_a_cambiar = this.interruptores_cambiar[interruptor];

    botones_a_cambiar.forEach((interruptor) => {
      this.interruptores[interruptor] = !this.interruptores[interruptor];
    });
    this.intentos++;

  }

  reiniciaraleatorio(modo: boolean) {


    if (modo) {
      for (var i = 0; i < this.interruptores.length; i++) {

        var numeroAleatorio = Math.floor(Math.random() * (2));

        this.interruptores[i] = numeroAleatorio == 1;
      }
    }
      else {
        for (var i = 0; i < this.interruptores.length; i++) {
          this.interruptores[i] = false;
          console.log("modo normal");
        }

    };

    this.intentos = 0;
  }
}
