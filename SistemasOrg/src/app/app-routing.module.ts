import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EstrategiasComponent } from './estrategias/estrategias.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { EquipoComponent } from './equipo/equipo.component';
import { MacroprocesosComponent } from './macroprocesos/macroprocesos.component';

const routes: Routes = [
  {path:"", component:InicioComponent, title:"Inicio"},
  {path:"nosotros", component:NosotrosComponent, title:"Nosotros"},
  {path:"estrategias", component:EstrategiasComponent, title:"Estrategias"},
  {path:"organizacion", component:OrganizacionComponent, title:"Organización"},
  {path:"diagnostico", component:DiagnosticoComponent, title:"Diagnostico"},
  {path:"equipo", component:EquipoComponent, title:"Nuestro equipo"},
  {path:"macroprocesos", component:MacroprocesosComponent, title:"Macroprocesos"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
