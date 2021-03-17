import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  animales:Array<any>=[
    {tipo:'perro', nombre:'lisa',edad:10},
    {tipo:'gato', nombre:'michu',edad:2},
    {tipo:'conejo', nombre:'burbu',edad:1}
  ]

  equipo:any []= [];
  constructor(private _servicio:EquipoService) {
    this.equipo= _servicio.obtenerEquipo()

   }

  ngOnInit(): void {
  }

}
