import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { MatTableDataSource, PageEvent, MatCheckbox } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Page } from '../model/page.model';
import { safeCall } from '../function/safe-call';
import { fadeIn } from '../animation/ghost-animation';
import { trigger } from '@angular/animations';

@Component({
  selector: 'lib-table-list-genesis',
  templateUrl: './table-list-genesis.component.html',
  styleUrls: ['./table-list-genesis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger('fadeInd', fadeIn(':enter'))]
})
export class TableListGenesisComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() displayColumns: string[] = [];
  @Input() paginatorSize: string[] = ['10', '20', '30'];
  @Input() length = 0;
  @Input() itens: ItemTable;
  @Input() header = true;
  @Input() data: Array<any> = [];
  @Input() pageIndex = 0;
  @Input() pageSize = 0;
  @Input() isPaginator = true;
  keyLabel: string;

  @Output() clickRowHandler = new EventEmitter<any>();
  @Output() pageHandler = new EventEmitter<PageEvent>();
  @Output() editHandler = new EventEmitter<number>();
  @Output() deleteHandler = new EventEmitter<number>();


  selection = new SelectionModel<any>(true, []);
  itemsSelected: any[] = [];

  @Output() handlerSelected = new EventEmitter<any>();

  @ViewChildren('instanceCheckbox') listCheckbox: QueryList<MatCheckbox>;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource.data = [... this.data];
  }

  onRowClicked(row: any) {
    this.clickRowHandler.emit(row);
  }

  changeStyle(item) {
    return { 'flex': `0 0 ${item.percent};` }
  }

  fillData(page: Page<any>) {
    this.isPaginator = true;
    this.pageIndex = page.pageable.pageNumber;
    this.pageSize = page.size;
    this.length = page.totalElements;
    this.dataSource.data = [...page.content];
    this.cd.detectChanges();
  }

  fillDataNoPage(data: any[]) {
    this.dataSource.data = [...data];
    this.isPaginator = false;
  }

  fillSelected(items?: any[], keyLabel?: string) {
    this.keyLabel = keyLabel;
    this.itemsSelected = items;

    setTimeout(() => {
      for (let i = 0; i < this.dataSource.data.length; i++) {
        const data = this.dataSource.data[i];
        const index = items.findIndex(o => o[keyLabel] === data[keyLabel]);
        if (index !== -1) {
          this.selection.select(data);
          this.listCheckbox.toArray()[i].checked = true;
        }
      }
      this.cd.detectChanges();
    });
  }

  setPaginatorSize(paginator: string[]) {
    this.paginatorSize = paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.cleanSelect() : this.dataSource.data.forEach((row) => this.selection.select(row));
    this.handlerSelected.emit(this.selection.selected);
  }

  private cleanSelect() {
    this.selection.clear();
    this.listCheckbox.toArray().forEach(che => che.checked = false);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} }`;
  }

  selectRow($event, row: any) {
    safeCall($event, () => {
      const index = this.selection.selected.findIndex(o => o[this.keyLabel] === row[this.keyLabel]);
      if (index !== -1) {
        this.selection.deselect(row);
        this.selection.selected.splice(index, 0);
        this.itemsSelected = this.selection.selected;
      } else {
        this.selection.select(row);
      }
      this.handlerSelected.emit(this.selection.selected);
    });
  }

  actionEdit(index: number) {
    this.editHandler.emit(index);
  }

  actionDelete(index: number) {
    this.deleteHandler.emit(index);
  }
}


export interface ItemTable {
  columnName: string;
  headerName: string;
  headerMobile?: string;
  percent?: string;
  notCenter?: boolean;
}