import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiechartComponent} from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { CommonModule } from '@angular/common';
import { BasicgraphComponent } from './basicgraph/basicgraph.component';
import { CrtgraphComponent } from './crtgraph/crtgraph.component';
import { GroupedchartComponent } from './groupedchart/groupedchart.component';



const routes: Routes = [
  { path: '', component: BarchartComponent },
  { path: 'barchart', component: BarchartComponent },
  {  path: 'piechart', component: PiechartComponent },
  {path:'crtgraph', component: CrtgraphComponent},
  {path:'basicgraph', component:BasicgraphComponent },
  {path:'groupedchart', component:GroupedchartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
