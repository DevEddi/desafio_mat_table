import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "./data-service.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit {

  displayedColumns = ['userId', 'id', 'title'];
  dataSource!:MatTableDataSource<any>;
  constructor(private service: DataServiceService) {

  }

  ngOnInit(): void {
    this.service.getUserData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response)
      console.log('response is', response);
    })
  }

}
