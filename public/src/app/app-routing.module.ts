import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidsComponent } from './bids/bids.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { AppComponent } from "./app.component";

const routes: Routes = [
  {path: '', pathMatch: "full", component: HomeComponent},
  {path: 'bids', component: BidsComponent},
  {path: 'result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
