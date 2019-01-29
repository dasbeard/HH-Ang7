import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ServingFoodTableDataSource } from './serving-food-table-datasource';

@Component({
  selector: 'app-serving-food-table',
  templateUrl: './serving-food-table.component.html',
  styleUrls: ['./serving-food-table.component.css']
})
export class ServingFoodTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  dataSource: ServingFoodTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['day', 'open', 'close'];

  ngOnInit() {
    this.dataSource = new ServingFoodTableDataSource();
  }
}
