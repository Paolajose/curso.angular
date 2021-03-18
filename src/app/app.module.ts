import { RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ EquipoService } from './equipo.service';

import { AppComponent } from './app.component';
import { AppPaolaComponent } from './app-paola/app-paola.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes=[
  { path:'nosotros', component: NosotrosComponent },
  { path:'contacto', component: ContactoComponent },
  { path:'inicio', component: InicioComponent },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AppPaolaComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
