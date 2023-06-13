import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllVehiculoComponent } from './component/vehiculo/get-all-vehiculo/get-all-vehiculo.component';
import { OneVehiculoComponent } from './component/vehiculo/one-vehiculo/one-vehiculo.component';

const routes: Routes = [
 {
  path:'',
  component:GetAllVehiculoComponent
 },
 
 {
  path:'getOneVehiculo/:idVehiculo/:idMarca/:idUsuario',
  component: OneVehiculoComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
