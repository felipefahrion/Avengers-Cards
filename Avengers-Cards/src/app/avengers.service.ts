import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  url:string = "http://www.superheroapi.com/api.php/1909737655806103/";


  constructor(private http: Http) { }

  getSuperHeros(idOrName):Observable<any>{
    let query;

    if(isNaN(idOrName)) {
      query = '/search/' + idOrName;
    } else {
      query = '/' + idOrName;
    }

    return this.http.get(this.url+ query).pipe(map((res: Response) => res.json()));

  }


}