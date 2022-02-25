import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  CustomerForm!: FormGroup;
  currentCustomer : any;
  customer : any;
  id: any;
  drink: any;
  constructor(private service1 : DrinkService,private service: CustomerService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.service1.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })

    this.CustomerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      tel_phone: new FormControl(),
      drinkName: new FormControl(),
      drinkType: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getCustomerById(this.id).subscribe((res)=>{
      this.currentCustomer = res.data;
      this.CustomerForm.controls['name'].setValue(this.currentCustomer.name);
      this.CustomerForm.controls['email'].setValue(this.currentCustomer.email);
      this.CustomerForm.controls['tel_phone'].setValue(this.currentCustomer.tel_phone);
      this.CustomerForm.controls['drinkName'].setValue(this.currentCustomer.drinkName);
      this.CustomerForm.controls['drinkType'].setValue(this.currentCustomer.drinkType);
    });
  }

  editCustomer(){
    let customer = {
      name: this.CustomerForm.value.name,
      email: this.CustomerForm.value.email,
      tel_phone: this.CustomerForm.value.tel_phone,
      favoriteDrinks : [{
        drinkName: this.CustomerForm.value.drinkName,
        drinkType: this.CustomerForm.value.drinkType
      }]
    }
    this.service.editCustomer(customer,this.id).subscribe((res:any)=>{
      window.alert("Update Complete");
      this.router.navigate(["/customer"]);
    });
  }

}
