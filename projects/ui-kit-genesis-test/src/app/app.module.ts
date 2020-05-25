import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UiKitGenesisModule } from 'ui-kit-genesis';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiKitGenesisModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
