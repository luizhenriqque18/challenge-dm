import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { environment } from 'src/environments/environment';
import { CategoryDto } from './category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public pathUrl = `${environment.url}/category`;

  public findAllUsingGet(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.pathUrl}`);
  }

  public findByIdUsingGet(id: string): Observable<Category> {

    return this.http.get<Category>(`${this.pathUrl}/${id}`);
  }

  public DeleteByIdUsingDelete(id: string): Observable<Category> {

    return this.http.delete<Category>(`${this.pathUrl}/${id}`);
  }

  public CreateUsingPost(category: CategoryDto): Observable<Category> {

    return this.http.post<Category>(`${this.pathUrl}`, category);
  }
}
