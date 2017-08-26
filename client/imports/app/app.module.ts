import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

 
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    MyApp
  ],
  entryComponents: [
    MyApp
  ],
  bootstrap:    [ MyApp ]
})
export class AppModule {}