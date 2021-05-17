import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public pathUrl = `${environment.url}`;

  public findAllUsingGet(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.pathUrl}/category`);
  }
}
