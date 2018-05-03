import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.ContarTres().then(
      mensaje => console.log('Termino', mensaje)
    )
    .catch(error => console.error('Error en la promesa', error));

  }

  ngOnInit() {
  }

  ContarTres(): Promise<boolean>  {

    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      let contador = 0;

      let intevalo = setInterval( () => {
        contador += 1;
        console.log(contador);
         if (   contador === 3) {
          resolve( true);
          // reject('Simplemente un error');
          clearInterval(intevalo);
         }
      }, 1000);

    });

  }

}
