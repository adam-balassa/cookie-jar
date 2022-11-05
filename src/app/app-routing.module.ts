import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { ComplimentAddedComponent } from './pages/compliment-added/compliment-added.component';
import { GetSurpriseComponent } from './pages/get-surprise/get-surprise.component';
import { GetComponent } from './pages/get/get.component';
import { GiveComponent } from './pages/give/give.component';
import { InviteComponent } from './pages/invite/invite.component';
import { MainComponent } from './pages/main/main.component';
import { FirstPageComponent } from './pages/tutorial/first-page/first-page.component';
import { FourthPageComponent } from './pages/tutorial/fourth-page/fourth-page.component';
import { SecondPageComponent } from './pages/tutorial/second-page/second-page.component';
import { ThirdPageComponent } from './pages/tutorial/third-page/third-page.component';

const routes: Routes = [
  { path: 'give', component: GiveComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'get', component: GetComponent },
  { path: 'give/suggest', component: GiveComponent },
  { path: 'surprise-me', component: GetSurpriseComponent },
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
