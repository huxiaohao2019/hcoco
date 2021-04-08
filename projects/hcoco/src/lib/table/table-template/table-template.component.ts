import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'co-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
