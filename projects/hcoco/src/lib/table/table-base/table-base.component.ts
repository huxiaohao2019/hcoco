import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-table-base',
  templateUrl: './table-base.component.html',
  styleUrls: ['./table-base.component.css']
})
export class TableBaseComponent implements OnInit {
  title = '用户表'
  constructor() { }

  ngOnInit(): void {
  }

}
