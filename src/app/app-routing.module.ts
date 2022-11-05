import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplimentAddedComponent } from './pages/compliment-added/compliment-added.component';
import { GiveComponent } from './pages/give/give.component';
import { MainComponent } from './pages/main/main.component';
import { FirstPageComponent } from './pages/tutorial/first-page/first-page.component';

const routes: Routes = [
  { path: 'give', component: GiveComponent },
  { path: 'added', component: ComplimentAddedComponent },
  { path: 'tutorial/1', component: FirstPageComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
