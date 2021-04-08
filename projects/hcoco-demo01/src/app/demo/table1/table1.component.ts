import { Component, OnInit } from '@angular/core';
import { TableBaseComponent } from 'projects/hcoco/src/lib/table/table-base/table-base.component';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component extends TableBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
