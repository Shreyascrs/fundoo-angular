import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup,Form, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Loginmodel } from 'src/app/model/loginmodel';
import { Httpservice } from "src/app/service/httpservice";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  

  loginmodel: Loginmodel = new Loginmodel();

  email = new FormControl(this.loginmodel.email, [Validators.required, Validators.email]);
  password = new FormControl(this.loginmodel.password);
  token: string;
  // hide: true;

  constructor(private snackBar: MatSnackBar,
     private httpservice: Httpservice, 
     private userService: UserService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }
  forgot(){

  }
  login() {
    if(this.password.value != ''){
      this.token = localStorage.getItem("token");
      this.httpservice.postRequest("login", this.loginmodel).subscribe(
        (Response: any) => {
          
          if (Response.statusCode == 200)
           {
            console.log(Response);
            localStorage.setItem("token", Response.token);
            localStorage.setItem("email", Response.email);
            this.router.navigate(['/dashboard']);
  
            this.snackBar.open(
              "login successfull", "",
              { duration: 2500 }
            )
  
          }
          else {
            console.log(Response)
            this.snackBar.open(
              "Login failed", Response.getErrorMessage,
              { duration: 2500 }
            )
          }

        }
      )
    }else{
      this.snackBar.open(
        "plz enter the password", "Undo",
        { duration: 2500 }
      )
    }
    
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

}


