import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {
  constructor(app:AppComponent){
    app.pagina = 3;
  }
}
