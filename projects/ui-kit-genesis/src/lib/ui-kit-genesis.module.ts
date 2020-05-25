import { NgModule } from '@angular/core';
import { UiKiGenesisComponent } from './ui-kit-genesis.component';
import { TableListGenesisComponent } from './table-list-genesis/table-list-genesis.component';
import { MaterialModule } from './meterial/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiKiGenesisComponent, 
    TableListGenesisComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    UiKiGenesisComponent,
    TableListGenesisComponent,
    MaterialModule
  ]
})
export class UiKitGenesisModule { }
