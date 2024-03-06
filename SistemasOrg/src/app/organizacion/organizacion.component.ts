import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.scss']
})
export class OrganizacionComponent {
  constructor(app:AppComponent){
    app.pagina = 2;
  }
}
