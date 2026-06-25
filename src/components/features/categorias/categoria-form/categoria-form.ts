import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE para usar ngModel
import { CategoriaService } from '../../../../app/components/features/categorias/services/categoria';
import { Categoria } from '../../../../model/categoria';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './categoria-form.html'
})
export class CategoriaForm implements OnInit {

  // Objeto ligado a los inputs del formulario
  categoria: Categoria = {
    nombreCategoria: '',
    descripcionCategoria: ''
  };

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private activatedRoute: ActivatedRoute // 👈 Para capturar el ID si vamos a editar
  ) {}

  ngOnInit(): void {
    this.cargarCategoriaParaEditar();
  }

  // Si la URL incluye un ID (ej: /categoria-form/1), busca los datos en el Back y los precarga
  cargarCategoriaParaEditar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.categoriaService.findById(id).subscribe({
        next: (data) => this.categoria = data,
        error: (err) => console.error(err)
      });
    }
  }

  // Guarda los datos (Decide si hace POST o PUT según si ya existe un idCategoria)
  guardar(): void {
    if (this.categoria.idCategoria) {
      // 👈 Es una edición (PUT)
      this.categoriaService.update(this.categoria.idCategoria, this.categoria).subscribe({
        next: () => this.redirigir(),
        error: (err) => console.error(err)
      });
    } else {
      // 👈 Es un registro nuevo (POST)
      this.categoriaService.create(this.categoria).subscribe({
        next: () => this.redirigir(),
        error: (err) => console.error(err)
      });
    }
  }

  redirigir(): void {
    // Te regresa automáticamente a la tabla cuando finaliza la operación
    this.router.navigate(['/listaCategorias']);
  }
}
