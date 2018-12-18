import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursoProvider {

  private cursos=[new Curso("JavaScript",1500),
                  new Curso("Html",2200),
                  new Curso("Ionic",2800)]

  getCursos(){
    return this.cursos;
  }
  existeCurso(nombre:string):boolean{
    for (let i=0;i<this.cursos.length;i++)
      if (this.cursos[i].nombre.toUpperCase()==nombre.toUpperCase())
        return true;
    // si no encuentra el elemento buscado, retorna false
    return false;
  }
  agregarCurso(c:Curso){
    
    if (!this.existeCurso(c.nombre))
    {
      this.cursos.push(c)
      return true;
    }else
      return false;
  }

  constructor(public http: HttpClient) {
    console.log('Hello CursoProvider Provider');
  }

}

export class Curso {
  constructor (public nombre:string,public precio:number){

  }
}
