import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Curso, CursoProvider } from '../../providers/curso/curso';

/**
 * Generated class for the RegistroCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-curso',
  templateUrl: 'registro-curso.html',
})
export class RegistroCursoPage {

  c :Curso = new Curso("",0)

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast:ToastController,
              public cursoP:CursoProvider) {
  }

  guardar(){
    if (this.cursoP.existeCurso(this.c.nombre)){
      this.toast.create({"message":"Ya existe el cursos "+this.c.nombre}).present()
    }else
    {
      this.cursoP.agregarCurso(this.c);
      this.navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCursoPage');
  }

}
