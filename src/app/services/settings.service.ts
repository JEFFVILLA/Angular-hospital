import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
 ajustes: Ajustes = {
   temaUrl: 'assets/css/colors/default.css',
   tema: 'default'
 }
 
  constructor() { }


  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    
  }

  cargarAjustes(){
    if (localStorage.)
  }
}



interface Ajustes {
  temaUrl: string;
  tema: string;
}
