import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { ListaDeCategorias } from '../../components/features/categorias/lista-de-categorias/lista-de-categorias';

@Component({
  selector: 'app-home',
  imports: [ListaDeCategorias],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
