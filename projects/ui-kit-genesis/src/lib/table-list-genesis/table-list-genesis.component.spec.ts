import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListGenesisComponent } from './table-list-genesis.component';

describe('TableListGenesisComponent', () => {
  let component: TableListGenesisComponent;
  let fixture: ComponentFixture<TableListGenesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListGenesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListGenesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
