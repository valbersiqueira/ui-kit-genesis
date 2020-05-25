import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-kit-genesis',
  template: `
  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
  <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
  `,
  styles: []
})
export class UiKiGenesisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
