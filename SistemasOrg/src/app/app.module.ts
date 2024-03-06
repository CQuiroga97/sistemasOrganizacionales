import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NbIconModule, NbLayoutModule, NbSidebarComponent, NbSidebarModule, NbStatusService, NbThemeModule, NbThemeService } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EstrategiasComponent } from './estrategias/estrategias.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    EstrategiasComponent,
    OrganizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NgbModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  providers: [
    NbStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
