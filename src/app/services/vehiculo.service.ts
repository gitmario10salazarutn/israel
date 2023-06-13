import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private baseApiUrl=environment.API_BASE_URL;
  constructor(private http:HttpClient ) { }

  getAllVehiculo(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.baseApiUrl+'/vehiculo')

  }
  getOneVehiculo(id:number): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(this.baseApiUrl+'/vehiculo/'+id)

  }

}
