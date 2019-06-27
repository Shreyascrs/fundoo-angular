import { Component, OnInit } from '@angular/core';
import { Resetpassword } from "src/app/model/resetpassword";
import { FormControl, Validators,FormGroup,Form, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Httpservice } from "src/app/service/httpservice";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword:Resetpassword=new Resetpassword();
  password=new FormControl(this.resetpassword.password);
  token:string;


  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
    console.log("token reset=====>",this.token);
    
  }



  constructor(
    private snackbar:MatSnackBar,
    private httpservice: Httpservice,
    public formbuilder: FormBuilder,  
    private router: Router,
    private route:ActivatedRoute
  ) {
   }

   onreset(){
    console.log(this.resetpassword);
console.log("token",this.token);

    this.httpservice.putRequest("resetpassword/"+this.token,this.resetpassword).subscribe(
    (Response:any)=>
    {
      if(Response.statusCode==200)
      {
        console.log(Response);
        this.router.navigate(['/login'])
          this.snackbar.open(
            "password changed", "close",

            { duration: 2500 }
          )
      }else{
        
          this.snackbar.open(
            "password not changed", "close",

            { duration: 2500 }
          )
      }
}
    )
   } 
  }
