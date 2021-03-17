import { RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ EquipoService } from './equipo.service';

import { AppComponent } from './app.component';
import { AppPaolaComponent } from './app-paola/app-paola.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes=[
  { path:'header', component: HeaderComponent },
  { path:'inicio', component: InicioComponent },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AppPaolaComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent
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
