import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.css']
})
export class EditDrinkComponent implements OnInit {
  DrinkForm!: FormGroup;
  currentCustomer : any;
  customer : any;
  id: any;
  constructor(private service: DrinkService,private router: Router,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.DrinkForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      drinkTy: new FormControl(),
      price: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getDrinkById(this.id).subscribe((res)=>{
      this.currentCustomer = res.data;
      this.DrinkForm.controls['name'].setValue(this.currentCustomer.name);
      this.DrinkForm.controls['img'].setValue(this.currentCustomer.img);
      this.DrinkForm.controls['drinkTy'].setValue(this.currentCustomer.drinkTy);
      this.DrinkForm.controls['price'].setValue(this.currentCustomer.price);
    });
  }

  editDrink(){
    let customer = {
      name: this.DrinkForm.value.name,
      img: this.DrinkForm.value.img,
      drinkTy: this.DrinkForm.value.drinkTy,
      price: this.DrinkForm.value.price,
    }
    this.service.editDrink(customer,this.id).subscribe((res:any)=>{
      window.alert("Update Complete");
      this.router.navigate(["/drink"]);
    });
  }

}
