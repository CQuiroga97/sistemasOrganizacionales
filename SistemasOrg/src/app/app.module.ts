import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSidebarComponent, NbSidebarModule, NbStatusService, NbThemeModule, NbThemeService } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EstrategiasComponent } from './estrategias/estrategias.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { EquipoComponent } from './equipo/equipo.component';
import { RouterModule } from '@angular/router';
import { MacroprocesosComponent } from './macroprocesos/macroprocesos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    EstrategiasComponent,
    OrganizacionComponent,
    DiagnosticoComponent,
    EquipoComponent,
    MacroprocesosComponent
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,

    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NgbModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule
  ],
  providers: [
    NbStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
