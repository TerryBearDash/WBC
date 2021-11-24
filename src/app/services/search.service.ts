import { Injectable } from '@angular/core';
import { Search, SearchModel } from '../helpers/search.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private api: ApiService
  ) { }

  search(params: Search) {
    return this.api.post("/search", params);
  }

}
