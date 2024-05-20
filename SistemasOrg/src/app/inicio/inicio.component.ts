import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  title = 'SistemasOrg';
  public pagina = 0;
  public open = false;
  constructor(private router:Router){}

  cambiarPagina(paginaGo:any, frag:any){
    this.open = false;
    this.router.navigate([paginaGo], {fragment:frag})
  }
}
