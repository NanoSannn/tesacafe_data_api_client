import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  CustomerForm!: FormGroup;
  drink : any;
  constructor(private service1 : DrinkService,private service: CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.service1.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })
    this.CustomerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      tel_phone: new FormControl(),
    });
  }

  addCustomer(){
    let customer = {
      name:this.CustomerForm.value.name,
      email: this.CustomerForm.value.email,
      tel_phone: this.CustomerForm.value.tel_phone,
    }
    this.service.addCustomer(customer).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a customer complete."){
        window.alert("Add Complete");
        this.router.navigate(["/customer"]);
      }else{
        window.alert("Add Not Complete !");
        this.router.navigate(["/customer/addcustomer"]);
      }
      
    });
  }

}
