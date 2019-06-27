import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Forgotpassword } from 'src/app/model/forgotpassword';
import { MatSnackBar } from '@angular/material';
import { Httpservice } from 'src/app/service/httpservice';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgetpassword: Forgotpassword = new Forgotpassword();
  email = new FormControl(this.forgetpassword.email);

  
  constructor(private snackbar: MatSnackBar,
    private httpservice: Httpservice,
    public formbuilder: FormBuilder,  
    private route: Router

  ) { }

  ngOnInit() {
  }




  onforgot() {
    console.log(this.email);
    this.httpservice.postRequest("forgetpassword", this.forgetpassword).subscribe(
      (response: any) => {
        if (response.statusCode == 205) {
          console.log(response);
          this.snackbar.open(
            "Link sent", "close",

            { duration: 2500 }
          )
        } else {
          console.log(response);
          this.snackbar.open(
            "Failed", "close ",
            { duration: 2500 }    
          )
        }
      }
    )
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
