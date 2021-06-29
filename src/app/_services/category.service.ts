import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../_models/category';
import { ListResponseModel } from '../_models/listResponseModel';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl: string = 'https://localhost:44385/api/';

  constructor(private httpClient: HttpClient) {}

  getCategories1() {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(
      this.apiUrl + 'categories/getall'
    );
  }

  // public getCategoryById(id: number) {
  //   let url = `${this.apiUrl}/${id}`;
  //   return this.httpClient.get<Category>(url);
  // }
}
