import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroCursoPage } from './registro-curso';

@NgModule({
  declarations: [
    RegistroCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroCursoPage),
  ],
})
export class RegistroCursoPageModule {}
