import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ServingFoodTableItem {
  day: string;
  open: string;
  close: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ServingFoodTableItem[] = [
  { day: 'Monday', open: '12:00 am', close: '12:00 am' },
  { day: 'Tuesday', open: '12:00 am', close: '12:00 am' },
  { day: 'Wednesday', open: '12:00 am', close: '12:00 am' },
  { day: 'Thursday', open: '12:00 am', close: '12:00 am' },
  { day: 'Friday', open: '12:00 am', close: '12:00 am' },
  { day: 'Saturday', open: '12:00 am', close: '12:00 am' },
  { day: 'Sunday', open: '12:00 am', close: '12:00 am' },
];

/**
 * Data source for the ServingFoodTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ServingFoodTableDataSource extends DataSource<ServingFoodTableItem> {
  data: ServingFoodTableItem[] = EXAMPLE_DATA;

  // constructor(private paginator: MatPaginator, private sort: MatSort) {
  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ServingFoodTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      // this.paginator.page,
      // this.sort.sortChange
    ];

    // Set the paginator's length
    // this.paginator.length = this.data.length;

    return merge(...dataMutations);
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getPagedData(data: ServingFoodTableItem[]) {
  //   const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
  //   return data.splice(startIndex, this.paginator.pageSize);
  // }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  // private getSortedData(data: ServingFoodTableItem[]) {
  //   if (!this.sort.active || this.sort.direction === '') {
  //     return data;
  //   }

  //   return data.sort((a, b) => {
  //     const isAsc = this.sort.direction === 'asc';
  //     switch (this.sort.active) {
  //       case 'day': return compare(a.day, b.day, isAsc);
  //       case 'open': return compare(a.open, b.open, isAsc);
  //       case 'close': return compare(a.close, b.close, isAsc);
  //       // case 'id': return compare(+a.id, +b.id, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
