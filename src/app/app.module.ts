import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { JarComponent } from './components/jar/jar.component';
import { JarButtonsComponent } from './components/jar/jar-buttons/jar-buttons.component';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { GiveComponent } from './pages/give/give.component';
import { GiveComplimentComponent } from './components/give-compliment/give-compliment.component';
import { AddButtonComponent } from './components/give-compliment/add-button/add-button.component';
import { FormsModule } from '@angular/forms';
import { ComplimentAddedComponent } from './pages/compliment-added/compliment-added.component';
import { FirstPageComponent } from './pages/tutorial/first-page/first-page.component';
import { GetComponent } from './pages/get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JarComponent,
    JarButtonsComponent,
    SurpriseMeComponent,
    GiveComponent,
    GiveComplimentComponent,
    AddButtonComponent,
    ComplimentAddedComponent,
    FirstPageComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
