import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplimentAddedComponent } from './pages/compliment-added/compliment-added.component';
import { GiveComponent } from './pages/give/give.component';
import { MainComponent } from './pages/main/main.component';
import { FirstPageComponent } from './pages/tutorial/first-page/first-page.component';
import { FourthPageComponent } from './pages/tutorial/fourth-page/fourth-page.component';
import { SecondPageComponent } from './pages/tutorial/second-page/second-page.component';
import { ThirdPageComponent } from './pages/tutorial/third-page/third-page.component';

const routes: Routes = [
  { path: 'give', component: GiveComponent },
  { path: 'give/suggest', component: GiveComponent },
  { path: 'added', component: ComplimentAddedComponent },
  { path: 'tutorial/1', component: FirstPageComponent },
  { path: 'tutorial/2', component: SecondPageComponent },
  { path: 'tutorial/3', component: ThirdPageComponent },
  { path: 'tutorial/4', component: FourthPageComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
