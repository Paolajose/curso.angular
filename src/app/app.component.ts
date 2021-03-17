import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paola';
  show:boolean=true;
  fondo:string;
  activo:string;
  cursos:string[]=['html', 'angular','php']
  animales:Array<any>=[
    {tipo:'perro', nombre:'lisa',edad:10},
    {tipo:'gato', nombre:'michu',edad:2},
    {tipo:'conejo', nombre:'burbu',edad:1}
  ]
}
