import { Component } from '@angular/core';
import { Categoria } from '../../../../model/categoria';

@Component({
  selector: 'app-lista-de-categorias',
  imports: [],
  templateUrl: './lista-de-categorias.html',
  styleUrl: './lista-de-categorias.css',
})
export class ListaDeCategorias {
  titulo:string = 'Categorias de Productos';
  listaDeCategorias: Categoria [] = [
    {
      idCategoria: 1,
      nombre: 'Deportes',
      descripcion: 'Articulos Deportivos'
    },
    {
      idCategoria: 2,
      nombre: 'Linea Blanca',
      descripcion: 'Articulos de Linea Blanca'
    },
    {
      idCategoria: 3,
      nombre: 'Electroncia',
      descripcion: 'Articulos de Electronica'
    }
  ]
}
