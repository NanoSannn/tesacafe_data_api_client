import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone_number: new FormControl(),
      password: new FormControl()
    });
  }

  register(){
    let customer = {
      name:this.registerForm.value.name,
      email: this.registerForm.value.email,
      phone_number: this.registerForm.value.phone_number,
      password: this.registerForm.value.password
    }
    this.service.register(customer).subscribe((res)=>{
      console.log(res);
      if(res.msg="register complete."){
        window.alert("register Complete");
        this.router.navigate(["/login"]);
      }else{
        window.alert("register Not Complete !");
        this.router.navigate(["/register"]);
      }
      
    });
  }
}
