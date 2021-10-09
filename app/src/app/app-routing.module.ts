import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./template/principal/principal.component";
import {ListarSimbolosComponent} from "./listar-simbolos/listar-simbolos.component";
import {ConverteDolarComponent} from "./converte-dolar/converte-dolar.component";
import {ConverteMoedasComponent} from "./converte-moedas/converte-moedas.component";

const routes: Routes = [
  {
    path:"",
    component: PrincipalComponent
  },
  {
    path:"list-simbolos",
    component: ListarSimbolosComponent
  },
  {
    path:"convertdolar",
    component: ConverteDolarComponent
  },
  {
    path:"convertmoedas",
    component: ConverteMoedasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
