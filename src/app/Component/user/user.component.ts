import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddBoxComponent } from 'src/app/box/add-box/add-box.component';
import { Friends } from 'src/app/shared/friends';
import { FriendsService } from 'src/app/shared/friends.service';

const ELEMENT_DATA: Friends[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'login', 'password', 'action' ];
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
      console.log(result.data);
      if (result.event == 'Update') {
        console.log('update')
      }
    });
  }

    addRowData(row_obj: { _id: any; login: any; password: any; }){
    this.dataSource.data.push({
      _id:row_obj._id,
      login:row_obj.login,
      password:row_obj.password
    });
    return this.dataSource.filter = "";
    
  }

    deleted(elm: any) {
    this.friendService.delFriends(elm).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Friends) => {
        return o._id !== elm ? o : false;
      });
      
      console.log(this.dataSource.data);
    });
  }
  hashPassword(password: string){
    return "*".repeat(password.length)
  }

  public getAllFriends() {
    let resp = this.friendService.getFriends();
    resp.subscribe(report => this.dataSource.data= report as Friends[])
  }
}


