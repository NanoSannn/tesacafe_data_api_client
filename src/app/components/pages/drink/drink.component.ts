import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  drink : any;
  searchForm!: FormGroup;
  constructor(private service : DrinkService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });

    this.service.getDrink().subscribe((res:any)=>{
      this.drink = res.data;
    })
  }

  searchName(){
    this.service.getDrinkByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.drink = res.data;
    })
  }

  deleteDrink(_id:any){
    
    if(confirm("Comfirm Delete")){
      
      this.service.deleteDrink(_id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/drink']);
        });
      });
    }
  }
}
