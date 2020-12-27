import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Friends } from 'src/app/friends';
import { FriendsService } from 'src/app/friends.service';

const ELEMENT_DATA: Friends[] = [];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'family', 'food', 'race' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor(private friendService: FriendsService) {}
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit(){
    this.getAllFriends();
  }

  public getAllFriends() {
    let resp = this.friendService.getFriends();
    resp.subscribe(report => this.dataSource.data= report as Friends[])
  }
}
