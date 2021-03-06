import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {Heroe} from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesURL:string = "https://heroesapp-339cb.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-339cb.firebaseio.com/heroes/";


  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post(this.heroesURL, body,{ headers })
      .pipe(map( res =>{
        console.log(res);
        return res;
      }));
  }

  actualizarHeroe(heroe:Heroe, key$:string ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put(url, body,{ headers })
      .pipe(map( res =>{
        console.log(res);
        return res;
      }));
  }

  getHeroe(key$:string) {
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map( res=>res ));
  }

  getHeroes() {
    return this.http.get( this.heroesURL ).pipe(map( res=>res ));
  }

  borrarHeroe( key$:string ){
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.delete( url ).pipe(map( res=>res ));
  }
}
