import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
titulo= "clase2_2 de ionic "
subtitulo="lsitados de cursos"
cursos=[];
cursosObj:Curso[] = [];
  constructor(public navCtrl: NavController) {
    this.cursos.push("javaScript");
    this.cursos.push("angular")
    this.cursos.push("ionic")

    this.cursosObj.push(new Curso(
      "javaScrpt",
      Math.random()*1000+1000,
      "./assets/imgs/1.jpg", 
       true))
       this.cursosObj.push(new Curso(
        "ionic",
        Math.random()*1000+1000,
        "./assets/imgs/3.jpg", 
          false))
  }

}
class Curso{

  constructor(
  public nombre:string,
  public precio:number,
  public foto:string,
  public disponible:boolean){

  }
}
