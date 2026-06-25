import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Categoria } from '../../../../model/categoria';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CategoriaService } from '../../../../app/components/features/categorias/services/categoria';

@Component({
  selector: 'app-lista-de-categorias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lista-de-categorias.html',
  styleUrl: './lista-de-categorias.css',
})
export class ListaDeCategorias implements OnInit {
  listaCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private cd: ChangeDetectorRef,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        console.log(data)
        this.listaCategorias = data;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar categorías desde el service:', err);
      }
    });
  }
  editarCategoria(id: number): void {
    console.log("Intentando navegar a editar la categoría con ID:", id);

    if (!id) {
      console.error("El ID de la categoría es indefinido o nulo.");
      return;
    }

    // Fuerza a Angular a moverse a la ruta del formulario pasando el ID
    this.router.navigate(['/categoria-form', id]);
  }
  eliminarCategoria(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      this.categoriaService.delete(id).subscribe({
        next: () => {
          this.cargarCategorias();
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }


  irACrear(): void {
  console.log("Probando navegación simple a formulario...");
  this.router.navigate(['/categoria-form']);
}
}
