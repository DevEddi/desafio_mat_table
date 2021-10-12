import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit {

  displayedColumns = ['userId', 'id', 'title'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  constructor(private service: DataServiceService) {

  }

  ngOnInit(): void {
    this.service.getUserData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log('response is', response);
    })
  }
  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

}
