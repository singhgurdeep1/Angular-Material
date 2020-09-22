import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientCardComponent } from './client-card/client-card.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { LstnCardComponent } from './shared/lstn-card/lstn-card.component';
import { TableComponent } from './table/table.component';
import { NoSanitizePipe } from './table/no-sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientCardComponent,
    CustomCardComponent,
    LstnCardComponent,
    TableComponent,
    NoSanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
