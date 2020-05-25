import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKiGenesisComponent } from './ui-kit-genesis.component';

describe('UiKiGenesisComponent', () => {
  let component: UiKiGenesisComponent;
  let fixture: ComponentFixture<UiKiGenesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiKiGenesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKiGenesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
