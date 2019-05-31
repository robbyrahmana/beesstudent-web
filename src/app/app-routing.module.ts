import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './content/curriculum/curriculum.component';

const routes: Routes = [
  { path: '', component: CurriculumComponent },
  { path: 'curriculum', component: CurriculumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
