import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {
  SalesForm!: FormGroup;
  drink : any;
  sales : any;
  constructor(private service1 : DrinkService,private service: SalesService,private router: Router) { }

  ngOnInit(): void {
    this.service1.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })
    this.SalesForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      tel_phone: new FormControl(),
    });
  }

  addSales(){
    let sales = {
      name:this.SalesForm.value.name,
      email: this.SalesForm.value.email,
      tel_phone: this.SalesForm.value.tel_phone
    }
    this.service.addSales(sales).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a customer complete."){
        window.alert("Add Complete");
        this.router.navigate(["/sales"]);
      }else{
        window.alert("Add Not Complete !");
        this.router.navigate(["/sales/addSales"]);
      }
      
    });
  }

}
