import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, filter, retry } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor() {

    this.suscription = this.regresaObs().pipe(
      retry(2)
      )
      .subscribe(
      numero => console.log('sub', numero),
      error => console.log('Error en el Obs', error),
      () => console.log('El observador Termino!.')
      );
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
   console.log('La pagina se va a cerrar');
   this.suscription.unsubscribe();
  }

  regresaObs(): Observable<number> {

    return  new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval(() => {

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida);

        // if ( contador === 3 ) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if ( contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      }, 500);
    }).pipe(
      retry(2),
      map((res: any) => {
      return res.valor;
      }),
      filter( (valor, index) => {

        if ( (valor % 2) === 1 ) {
          return true;
        } else {
          return false;
        }
      })
    );

  }

}
