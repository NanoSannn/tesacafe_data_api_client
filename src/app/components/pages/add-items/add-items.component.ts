import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
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
      drinkName: new FormControl(),
      drinkType: new FormControl(),
      price: new FormControl()
    });
    this.activatedRouter.params.subscribe(params=>{
      this.id = params['id']
    });
    this.service.getSalesById(this.id).subscribe((res)=>{
      this.currentSales = res.data;
      this.SalesForm.controls['drinkName'].setValue(this.currentSales.drinkName);
      this.SalesForm.controls['drinkType'].setValue(this.currentSales.drinkType);
      this.SalesForm.controls['price'].setValue(this.currentSales.price);
    });
  }
  addItems(id: any){
    let items = {
      items : [
        {
          drinkName: this.SalesForm.value.drinkName,
          drinkType: this.SalesForm.value.drinkType,
          price: this.SalesForm.value.price,
        }
      ]
      
    }
    // alert(review.star + review.comment + idReview)
    this.service.addItems(id, items).subscribe((res)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(()=> this.router.navigate(['/sales']));
    })
  }

}
