import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TechTreeComponent } from './tech-tree/tech-tree.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    TechTreeComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgbTooltipModule,
    NgbModule,
    MaterialModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
