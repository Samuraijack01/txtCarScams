import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PossibleComponent } from './possible/possible.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'possible', component:PossibleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
