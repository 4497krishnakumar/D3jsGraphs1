import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicgraphComponent } from './basicgraph/basicgraph.component';
import { CrtgraphComponent } from './crtgraph/crtgraph.component';
import { GroupedchartComponent } from './groupedchart/groupedchart.component';





@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    BasicgraphComponent,
    CrtgraphComponent,
    GroupedchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
