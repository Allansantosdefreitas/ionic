import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
  exports: [],
  declarations: [
    HomePage
  ],
  providers: [],
})

export class HomeModule { }
