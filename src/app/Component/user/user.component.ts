import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'family', 'food', 'race' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  ID: number
  Name: string;
  Age: string;
  Family: string;
  Food: string;
  Race: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Name: 'Schtroupf1', Age: '16', Family: 'B', Food: 'apple', Race: 'blue'},
  {ID: 2, Name: 'Schtroupf2', Age: '17', Family: 'A', Food: 'stramberry', Race: 'black'},
  {ID: 3, Name: 'Schtroupf3', Age: '18', Family: 'C', Food: 'agneau', Race: 'white'},
  {ID: 4, Name: 'Schtroupf4', Age: '19', Family: 'D', Food: 'apple', Race: 'green'},
  {ID: 5, Name: 'Schtroupf5', Age: '20', Family: 'T', Food: 'apple', Race: 'blue'},
];
