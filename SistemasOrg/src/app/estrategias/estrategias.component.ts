import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.scss']
})
export class EstrategiasComponent {
  constructor(app:AppComponent){
    app.pagina = 1;
  }
}
