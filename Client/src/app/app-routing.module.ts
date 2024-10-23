import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikoviComponent } from './likovi/likovi.component';
import { LikComponent } from './lik/lik.component';
import { LikCreateComponent } from './lik-create/lik-create.component';

const routes: Routes = [
  {path: '', component: LikoviComponent},
  {path: 'likovi', component: LikoviComponent},
  {path: 'lik/:id', component: LikComponent},
  {path: 'lik-create', component: LikCreateComponent},
  {path: '**', component: LikoviComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
