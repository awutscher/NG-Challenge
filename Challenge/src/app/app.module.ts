import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
