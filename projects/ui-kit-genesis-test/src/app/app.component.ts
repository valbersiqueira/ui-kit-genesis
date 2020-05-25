import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemTable } from 'projects/ui-kit-genesis/src/public-api';
import { TableListGenesisComponent } from 'dist/ui-ki-genesis/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui-kit-genesis-test';

  dataTable: DataTable[] = [];
  @ViewChild('instanceTable', {static: true}) instanceTable: TableListGenesisComponent

  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.dataTable.push({ id: index, name: `nome ${index}`});
    }
    this.instanceTable.fillDataNoPage(this.dataTable);
  }

  get displayColumns(): string[] {
    return [
      'id',
      'name'
    ];
  }

  get itensTable(): ItemTable[] {
    return [
      {
        columnName: 'id',
        headerName: 'Código',
        percent: `8%`
      },
      {
        columnName: 'name',
        headerName: 'Nome'
      }
    ];
  }
}

export interface DataTable {
  id: number;
  name: string;
}
