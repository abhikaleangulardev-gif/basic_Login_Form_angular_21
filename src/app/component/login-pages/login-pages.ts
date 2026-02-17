import { Component } from '@angular/core';
import { Login } from '../../interface/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Shared } from '../../service/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.css',
})
export class LoginPages {
  constructor(private sharedservice: Shared, private router: Router) { }
  myUserLogin: Login = {
    email: '',
    password: ''
  }


  onSubmit(login: any) {

    const myLoginPayload = login.value as Login;
    console.log(myLoginPayload);
    this.sharedservice.getRegisterList(myLoginPayload).subscribe({
      next: ((_resp: any) => {
        console.log(_resp);
        this.router.navigate(['/dashboard-page']);
      }),
      error: ((_error: Error) => {
        console.log(_error);
      })
    })
  }
}
