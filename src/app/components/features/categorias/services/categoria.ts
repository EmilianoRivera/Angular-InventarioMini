import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../../../../../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlBase = 'http://localhost:8085/api/v1/categorias';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlBase}/categoria`);
  }

  findById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlBase}/categoria/${id}`);
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.urlBase}/categoria`, categoria);
  }

  update(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.urlBase}/categoria/${id}`, categoria);
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${this.urlBase}/categoria/${id}`, { responseType: 'text' });
  }
}
