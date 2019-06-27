import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,Form, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Loginmodel } from 'src/app/model/loginmodel';
import { Httpservice } from "src/app/service/httpservice";
import { UserService } from 'src/app/service/user.service';
import { Registermodel } from 'src/app/model/registermodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
register: Registermodel=new Registermodel();
  name=new FormControl(this.register.name,[Validators.required]);
  phoneNumber=new FormControl(this.register.phoneNumber,[ Validators.required]);
  email =new FormControl(this.register.email,[Validators.required]);
  password=new FormControl(this.register.password,[Validators.required]);

  constructor(private snackbar: MatSnackBar,private httpservice:Httpservice,
    public formbuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
  }
  registerfun(){
    this.httpservice.postRequest('register', this.register).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          console.log(response);
          this.router.navigate(['/login'])
          this.snackbar.open(
            "Registered Successfully",
            "undo",
            { duration: 2500 }
          )
          
        } else {
          console.log(response); 
          this.snackbar.open(
            "Registration Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }
}

