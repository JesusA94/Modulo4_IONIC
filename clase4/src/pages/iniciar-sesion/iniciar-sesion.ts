import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {
  error  :boolean =false;
  mensaje:string  ="";
  usuario:string;
  clave  :string;

  verificarUsuario(){
    if (this.usuario=="" || this.clave==""){
      this.error=true
      this.mensaje="El usuario o la clave estan vacíos"
    }else
      if (this.usuario!="admin"){
        this.error=true;
        this.mensaje="Usuario no existe"
      }else
        if (this.clave!="1234"){
          this.error=true
          this.mensaje="Clave incorrecta"
        }else
        {
          this.error=false;
          this.mensaje="";
          this.toast.create(
              {
                  message:"Bienvenido",
                  duration:3000
                }).present();
          this.usuario=""
          this.clave=""      
          this.navCtrl.push(HomePage)
        }
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarSesionPage');
  }

}
