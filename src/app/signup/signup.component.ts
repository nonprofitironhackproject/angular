import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private myService: AuthService, private myRouter: Router) {}

  formInfo: any = {
    username: '',
    password: '',
    email: '',
    causes: ''
  };

  user: any;
  error: any;
  // title = 'app'; // ?

  signup() {
    console.log('----');
    console.log(this.formInfo);
    this.myService.signup(this.formInfo).subscribe(user => {
      this.user = user;
      console.log('Inside subscribe!');
      console.log(this.formInfo);
      this.myRouter.navigate(['/login']);
    }, err => (this.error = err));
  }

  ngOnInit() {
    this.myService
      .isLoggedIn()
      .then(() => {
        this.formInfo = this.myService.currentUser;
      })
      .catch(err => {
        console.log(err);
        // this.myRouter.navigate(['/login']);
      });
  }
}
