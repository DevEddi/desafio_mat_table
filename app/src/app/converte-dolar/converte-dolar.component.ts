import {Component, OnInit, ViewChild} from "@angular/core";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ConverteDolarService} from "./converte-dolar.service";



@Component({
  selector: 'app-converte-dolar',
  templateUrl: './converte-dolar.component.html',
  styleUrls: ['./converte-dolar.component.css']
})

export class ConverteDolarComponent implements OnInit {

  displayedColumns = ['userId', 'id', 'title'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  constructor(private service: ConverteDolarService) {

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


