import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss']
})
export class DiagnosticoComponent {
  constructor(app:AppComponent){
    app.pagina = 0;
  }
}
