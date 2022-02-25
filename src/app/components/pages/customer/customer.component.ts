import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer : any;
  searchForm!: FormGroup;
  constructor(private service : CustomerService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchName: new FormControl()
    });
    
    this.service.getCustomer().subscribe((res:any)=>{
      this.customer = res.data;
    })
  }

  searchName(){
    this.service.getCustomerByName(this.searchForm.value.searchName).subscribe((res:any)=>{
      this.customer = res.data;
    })
  }

  deleteCustomer(_id:any){
    if(confirm("Comfirm Delete")){
      this.service.deleteCustomer(_id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange:true})
        .then(()=>{
          this.router.navigate(['/customer']);
        });
      });
    }
  }
}
