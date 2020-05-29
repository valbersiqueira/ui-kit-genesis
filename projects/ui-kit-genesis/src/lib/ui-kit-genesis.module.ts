import { NgModule } from '@angular/core';
import { TableListGenesisComponent } from './table-list-genesis/table-list-genesis.component';
import { MaterialModule } from './meterial/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TableListGenesisComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    TableListGenesisComponent,
    MaterialModule
  ]
})
export class UiKitGenesisModule { }
