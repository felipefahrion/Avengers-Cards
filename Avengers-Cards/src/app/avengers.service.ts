import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  url = "http://www.superheroapi.com/api.php/1909737655806103/";


  constructor(private http: Http) { }

  getSuperHeros(id):Observable<any>{

    return this.http.get(this.url + '/' + id).pipe(map((res: Response) => res.json()));

  }


}
