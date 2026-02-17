import { Component, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Register } from '../../interface/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pages',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-pages.html',
  styleUrl: './register-pages.css',
})
export class RegisterPages implements OnInit {

  myUser: Register = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private sharedservice: Shared,private router:Router) { }

  ngOnInit(): void {

  }

  onsubmit(register: any) {
    const myRegisterPayload = register.value as Register;
    console.log(myRegisterPayload);
    this.sharedservice.postRegisterList(myRegisterPayload).subscribe({
      next: (_res: any) => {
        console.log(_res);
        this.router.navigate(['/login-page']);
      },
      error: (_error: Error) => {
        console.log(_error);
      }
    })
  }
}
