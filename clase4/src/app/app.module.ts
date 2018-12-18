import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IniciarSesionPage } from '../pages/iniciar-sesion/iniciar-sesion';
import { DetallePage } from '../pages/detalle/detalle';
import { CursoProvider } from '../providers/curso/curso';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistroCursoPage} from '../pages/registro-curso/registro-curso'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IniciarSesionPage,
    DetallePage,
    RegistroCursoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarSesionPage,
    DetallePage,
    RegistroCursoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    CursoProvider
  ]
})
export class AppModule {}
