import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  searchForm!: FormGroup;
  sales : any;
  constructor(private service : SalesService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });

    this.service.getSales().subscribe((res:any)=>{
      this.sales = res.data;
    })
  }

  searchName(){
    this.service.getSalesByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.sales = res.data;
    })
  }

  deleteSales(_id:any){
    if(confirm("Comfirm Delete")){
      this.service.deleteSales(_id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/sales']);
        });
      });
    }
  }

}
