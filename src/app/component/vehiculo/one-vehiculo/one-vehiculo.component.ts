import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/models/marca';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { MarcaService } from 'src/app/services/marca.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-one-vehiculo',
  templateUrl: './one-vehiculo.component.html',
  styleUrls: ['./one-vehiculo.component.css']
})
export class OneVehiculoComponent implements OnInit {
  idVehiculo:any
  idMarca:any
  idUsuario:any

  vehiculo: Vehiculo | any ;
  marca:Marca |any;
  usuario:Usuario | any;
  letra:string='perro'
  constructor(private vehiculoService:VehiculoService,
    private marcaService:MarcaService,
    private usuarioService:UsuarioService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((paramMap:any)=>{
    const{params}=paramMap
    this.idVehiculo=params.idVehiculo
    this.idMarca=params.idMarca
    this.idUsuario=params.idUsuario
  })
this.getVehiculo(this.idVehiculo)
this.getMarcaByID(this.idMarca)
this.getUsuaioByID(this.idUsuario)
  }
/**
 * * esta funcion obtien un vehiculo por id
 */
  getVehiculo(id:number): void{
    this.vehiculoService.getOneVehiculo(id)
    .subscribe({
      next:(response: Vehiculo | any) =>{
        this.vehiculo=response[0]

       
      }
     })
  }

/***
 * * esta funcion obtiene la marca del vehiculo
 */
   getMarcaByID(id:number): void{
   this.marcaService.getOneMarca(id)
    .subscribe({
      next:(response:  Marca| any) =>{
        this.marca=response[0]
       
      }
     })
  }
/***
 * * esta funcion obtiene el usuario o duenio del vehiculo
 */
   getUsuaioByID(id:number): void{
   this.usuarioService.getOneUsuario(id)
    .subscribe({
      next:(response:  Usuario| any) =>{
        this.usuario=response[0]
       
      }
     })
  }
  
}
