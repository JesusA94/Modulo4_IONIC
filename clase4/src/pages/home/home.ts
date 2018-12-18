import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetallePage} from '../detalle/detalle'
import { Curso, CursoProvider } from '../../providers/curso/curso';
import {RegistroCursoPage} from '../registro-curso/registro-curso'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cursos=[];

  cerrarSesion(){
    this.navCtrl.pop();
  }

  nuevo(){
    this.navCtrl.push(RegistroCursoPage)
  }

  verDetalle(elcurso:Curso){
    this.navCtrl.push(DetallePage,{"parametro":elcurso})
  }

  constructor(public navCtrl: NavController,
              public cursosP:CursoProvider) {
    this.cursos = cursosP.getCursos();
  }

}
