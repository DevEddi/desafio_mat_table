import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './template/topo/topo.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import { ConverteDolarComponent } from './converte-dolar/converte-dolar.component';
import { ConverteMoedasComponent } from './converte-moedas/converte-moedas.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ListarSimbolosComponent,
    ConverteDolarComponent,
    ConverteMoedasComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent]
})
export class AppModule { }
