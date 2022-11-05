import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveComponent } from './pages/give/give.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'give', component: GiveComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
