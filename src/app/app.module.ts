import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/elements/navbar/navbar.component';

import{HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/elements/footer/footer.component';
import { GetAllVehiculoComponent } from './component/vehiculo/get-all-vehiculo/get-all-vehiculo.component';
import { OneVehiculoComponent } from './component/vehiculo/one-vehiculo/one-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GetAllVehiculoComponent,
    OneVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
