import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private url = `${environment.serviceUrl}/sales`;
  constructor(private http : HttpClient) { }

  getSales() : any{
    return this.http.get<any>(this.url);
  }

  getSalesById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }


  getSalesByName(name: any){
    let getUrl = `${this.url}/name/${name}`;
    return this.http.get<any>(getUrl);
  }

  addSales(sales: any){
    let getUrl = `${this.url}/`;
    return this.http.post<any>(getUrl,sales)
    .pipe(map((res)=>{
      return res;
    }));
  }

  editSales(sales: any,id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,sales)
    .pipe(map((res)=>{
      return res;
    }));
  }

  addItems(id: any, items : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.patch<any>(getUrl, items)
      .pipe(map((res)=>{
        return res;
      }))
  }

  deleteSales(_id: any){
    let getUrl = `${this.url}/${_id}`;
    return this.http.delete<any>(getUrl);
  }
}
