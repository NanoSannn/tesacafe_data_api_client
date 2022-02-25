import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-add-favorite-drinks',
  templateUrl: './add-favorite-drinks.component.html',
  styleUrls: ['./add-favorite-drinks.component.css']
})
export class AddFavoriteDrinksComponent implements OnInit {
  CustomerForm!: FormGroup;
  drink : any;
  id : any;
  currentCustomer : any;
  constructor(private service1 : DrinkService,private service: CustomerService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service1.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })

    this.CustomerForm = new FormGroup({
      drinkName: new FormControl(),
      drinkType: new FormControl(),
    })

    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
    });

    this.service.getCustomerById(this.id).subscribe((res)=>{
      this.currentCustomer = res.data;
      this.CustomerForm.controls['drinkName'].setValue(this.currentCustomer.drinkName);
      this.CustomerForm.controls['drinkType'].setValue(this.currentCustomer.drinkType);
    });
  }
  addFavoriteDrinks(id: any){
    let favoriteDrink = {
      drinkName: this.CustomerForm.value.drinkName,
      drinkType: this.CustomerForm.value.drinkType
    }
    // alert(review.star + review.comment + idReview)
    this.service.addFavoriteDrinks(id, favoriteDrink).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=> this.router.navigate(['/customer/']));
    })
  }
}
