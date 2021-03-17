import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre:'paola',
      especialidad:'HTML',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis mollitia illum quod quis corrupti omnis quaerat accusantium? Quia officia facilis voluptate perspiciatis aliquid impedit doloremque, nulla nisi nam dignissimos.'
    },

    {
      nombre:'maria',
      especialidad:'css',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis mollitia illum quod quis corrupti omnis quaerat accusantium? Quia officia facilis voluptate perspiciatis aliquid impedit doloremque, nulla nisi nam dignissimos.'
    },

  ]

  constructor() {
    console.log('funcionando servicio')
   }

   obtenerEquipo(){
     return this.equipo
   }
}
