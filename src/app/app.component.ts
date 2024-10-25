import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rompecabezas';

  interruptores = [false, false, false, false, false];

fin = false;

  interruptores_cambiar = [
    [3, 4], // interruptor 0
    [2, 4], // interruptor 1 
    [1, 3], // interruptor 2
    [0, 2], // interruptor 3
    [0, 1], // interruptor 4
  ];

  intentos: number = 0;

  boton(interruptor: number) {
    const botones_a_cambiar = this.interruptores_cambiar[interruptor];


    this.interruptores[interruptor] = !this.interruptores[interruptor];
    

    setTimeout(() => {
    botones_a_cambiar.forEach((cambio) => {
      this.interruptores[cambio] = !this.interruptores[cambio];})
      
      if(this.interruptores[0] && this.interruptores[1] && this.interruptores[2] && 
        this.interruptores[3] && this.interruptores[4]){
          this.fin = true
        }
    ;
}, 100)


    this.intentos++;

  }

  reiniciaraleatorio(modo: boolean) {

    this.fin = false

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
