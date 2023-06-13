import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-get-all-vehiculo',
  templateUrl: './get-all-vehiculo.component.html',
  styleUrls: ['./get-all-vehiculo.component.css']
})
export class GetAllVehiculoComponent implements OnInit {
  vehiculos:Vehiculo[]=[];
  datoCargado:Boolean=false
  constructor(private vehiculoService:VehiculoService,private router:Router) { }

  ngOnInit(): void {
   this.getVehiculos()

  }
  
  getVehiculos(): void{
    this.vehiculoService.getAllVehiculo()
    .subscribe({
      next: (vehiculo) => {
        this.vehiculos=vehiculo;
        this.datoCargado=true
        
      },
      error: (response) =>{
        console.log(response)
      }
      
    })
  }
masInformacion(){
  this.router.navigate([''])
}

}
