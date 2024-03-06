import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SistemasOrg';
  public pagina = 0;
  public open = false;
  constructor(private router:Router){}

  cambiarPagina(paginaGo:any){
    this.open = false;
    this.router.navigate([paginaGo])
  }
}
