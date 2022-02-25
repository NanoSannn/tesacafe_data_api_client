import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private url = `${environment.serviceUrl}/drink`;
  constructor(private http : HttpClient) { }

  getDrink() : any{
    return this.http.get<any>(this.url);
  }

  getDrinkById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  getDrinkByName(name: any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  addDrink(drink: any){
    let getUrl = `${this.url}/`;
    return this.http.post<any>(getUrl,drink)
    .pipe(map((res)=>{
      return res;
    }));
  }

  editDrink(drink: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,drink)
    .pipe(map((res)=>{
      return res;
    }));
  }

  deleteDrink(_id: any){
    let getUrl = `${this.url}/${_id}`;
    return this.http.delete<any>(getUrl);
  }
}
