import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rompecabezas';

  interruptores = [false, false, false, false, false];

  boton(interruptor: number) {
    if (interruptor == 1) {
      this.interruptores[0] = !this.interruptores[0]
      this.interruptores[4] = !this.interruptores[4]
      this.interruptores[3] = !this.interruptores[3]
    }
    else if (interruptor == 2) {
      this.interruptores[1] = !this.interruptores[1]
      this.interruptores[2] = !this.interruptores[2]
      this.interruptores[4] = !this.interruptores[4]
    }
    else if (interruptor == 3) {
      this.interruptores[2] = !this.interruptores[2]
      this.interruptores[1] = !this.interruptores[1]
      this.interruptores[3] = !this.interruptores[3]
    }
    else if (interruptor == 4) {
      this.interruptores[3] = !this.interruptores[3]
      this.interruptores[0] = !this.interruptores[0]
      this.interruptores[2] = !this.interruptores[2]
    }
    else if (interruptor == 5) {
      this.interruptores[4] = !this.interruptores[4]
      this.interruptores[1] = !this.interruptores[1]
      this.interruptores[0] = !this.interruptores[0]
    };
  }
  reiniciar() {
    for (var i = 0; i < this.interruptores.length; i++) {
      this.interruptores[i] = false;
    }
  }
}
