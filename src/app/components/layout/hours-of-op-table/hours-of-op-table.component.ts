import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator, MatSort } from '@angular/material';
import { HoursOfOpTableDataSource } from './hours-of-op-table-datasource';

@Component({
  selector: 'app-hours-of-op-table',
  templateUrl: './hours-of-op-table.component.html',
  styleUrls: ['./hours-of-op-table.component.css']
})
export class HoursOfOpTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  dataSource: HoursOfOpTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['day', 'open', 'close'];

  ngOnInit() {
    this.dataSource = new HoursOfOpTableDataSource();
  }
}
