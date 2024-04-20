import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  constructor(app:AppComponent){
    app.pagina = 4;
  }
}
