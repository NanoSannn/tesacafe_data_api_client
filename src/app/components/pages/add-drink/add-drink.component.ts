import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {
  DrinkForm!: FormGroup;
  constructor(private service: DrinkService,private router: Router) { }

  ngOnInit(): void {
    this.DrinkForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      drinkTy: new FormControl(),
      price: new FormControl()
    });
  }
  addDrink(){
    let drink = {
      name:this.DrinkForm.value.name,
      img: this.DrinkForm.value.img,
      drinkTy: this.DrinkForm.value.drinkTy,
      price: this.DrinkForm.value.price
    }
    this.service.addDrink(drink).subscribe((res)=>{
      console.log(res);
      if(res.msg="Add a customer complete."){
        window.alert("Add Complete");
        this.router.navigate(["/drink"]);
      }else{
        window.alert("Add Not Complete !");
        this.router.navigate(["/drink/adddrink"]);
      }
      
    });
  }

}
