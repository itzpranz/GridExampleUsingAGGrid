import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([HomePageComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
