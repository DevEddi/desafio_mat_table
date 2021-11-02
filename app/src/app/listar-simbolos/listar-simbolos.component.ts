import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

export class Moeda{
  code: String = '';
  description: String= '';
}
@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit {



  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  moedas: Moeda[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns = ['code', 'description'];

  constructor(private DataServiceService : DataServiceService) {

  }
  ngOnInit(): void {
    this.dataSource.data = this.moedas;
    this.carregarMoedas();

    /*
    this.service.getUserData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log('response is', response);
    })
    */
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
  carregarMoedas(){
      this.DataServiceService.listaSimbolos().subscribe(
        value => {
          for (let symbol in value.symbols){
            let moeda: Moeda = new Moeda();
            moeda.code =value.symbols[symbol].code;
            moeda.description = value.symbols[symbol].description;
            this.moedas.push(moeda);
          }
          this.dataSource.data = this.moedas;
        }
      );
  }




  maiorNumero() {
    let a = 2;    let b = 4;
    if (a > b) {console.log(a);console.log('o A é maior do que o B');
    } else { console.log(b);
      console.log('o B é maior do que o A');
    }
  }

}
