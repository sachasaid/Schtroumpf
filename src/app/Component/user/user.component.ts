import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddBoxComponent } from 'src/app/box/add-box/add-box.component';
import { Friends } from 'src/app/friends';
import { FriendsService } from 'src/app/friends.service';

const ELEMENT_DATA: Friends[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'family', 'food', 'race', 'action' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  table: any;
  action: any;


  constructor(private friendService: FriendsService, public dialog: MatDialog) {}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit(){
    this.getAllFriends();
  }
    openDialog(action: any, obj: any) {
    obj.action = action;
    let dialogRef = this.dialog.open(AddBoxComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }
    });
  }
   openSave(action: any, obj: { action: any; }) {
    obj.action = action;
    let dialogRef = this.dialog.open(AddBoxComponent, {
      width: '800px',
      disableClose: true,
      data: obj
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHH")
      console.log(result.data);
      if (result.event == 'Update') {
        console.log('update')
      }
    });
  }

    addRowData(row_obj: { name: any; age: any; family: any; food: any; race: any; }){
    this.dataSource.data.push({
      name:row_obj.name,
      age:row_obj.age,
      family:row_obj.family,
      food:row_obj.food,
      race:row_obj.race
    });
    this.table.renderRows();
    return this.dataSource.filter = "";
    
  }

  public getAllFriends() {
    let resp = this.friendService.getFriends();
    resp.subscribe(report => this.dataSource.data= report as Friends[])
  }
}
