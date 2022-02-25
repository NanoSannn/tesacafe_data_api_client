import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.css']
})
export class EditSalesComponent implements OnInit {
  SalesForm!: FormGroup;
  drink : any;
  currentSales : any;
  id : any;
  sales : any;
  constructor(private service1 : DrinkService,private service: SalesService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.service1.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })
    this.SalesForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      tel_phone: new FormControl(),
      drinkName: new FormControl(),
      drinkType: new FormControl(),
      price: new FormControl()
    });
    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });
    this.service.getSalesById(this.id).subscribe((res)=>{
      this.currentSales = res.data;
      this.SalesForm.controls['name'].setValue(this.currentSales.name);
      this.SalesForm.controls['email'].setValue(this.currentSales.email);
      this.SalesForm.controls['tel_phone'].setValue(this.currentSales.tel_phone);
      this.SalesForm.controls['drinkName'].setValue(this.currentSales.drinkName);
      this.SalesForm.controls['drinkType'].setValue(this.currentSales.drinkType);
      this.SalesForm.controls['price'].setValue(this.currentSales.price);
    });
  }
  editSales(){
    let sales = {
      name:this.SalesForm.value.name,
      email: this.SalesForm.value.email,
      tel_phone: this.SalesForm.value.tel_phone,
      items : [{
        drinkName: this.SalesForm.value.drinkName,
        drinkType: this.SalesForm.value.drinkType,
        price: this.SalesForm.value.price
      }]
    }
    this.service.editSales(sales,this.id).subscribe((res:any)=>{
      window.alert("Update Complete");
      this.router.navigate(["/sales"]);
    });
  }

}
