import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseApiUrl=environment.API_BASE_URL;
  constructor(private http:HttpClient) { }

  getOneUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(this.baseApiUrl+'/usuario/'+id)

  }
}
