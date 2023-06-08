import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TechTreeComponent } from './tech-tree/tech-tree.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TechTreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgbTooltipModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
