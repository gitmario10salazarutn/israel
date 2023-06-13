import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private baseApiUrl=environment.API_BASE_URL;
  constructor(private http:HttpClient) { }

  getOneMarca(id:number): Observable<Marca>{
    return this.http.get<Marca>(this.baseApiUrl+`/marca/${id}`)

  }
}
