import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = `${environment.serviceUrl}/customer`;
  constructor(private http : HttpClient) { }

  getCustomer() : any{
    return this.http.get<any>(this.url);
  }

  getCustomerById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }


  getCustomerByName(name: any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  addCustomer(customer: any){
    let getUrl = `${this.url}/`;
    return this.http.post<any>(getUrl,customer)
    .pipe(map((res)=>{
      return res;
    }));
  }

  editCustomer(customer: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,customer)
    .pipe(map((res)=>{
      return res;
    }));
  }

  addFavoriteDrinks(id: any, favoriteDrink : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.patch<any>(getUrl, favoriteDrink)
      .pipe(map((res)=>{
        return res;
      }))
  }

  deleteCustomer(_id: any){
    let getUrl = `${this.url}/${_id}`;
    return this.http.delete<any>(getUrl);
  }

  deleteFavoriteDrinks(_id: any){
    let getUrl = `${this.url}/fd/${_id}`;
    console.log(getUrl);
    return this.http.delete<any>(getUrl);
  }
}
