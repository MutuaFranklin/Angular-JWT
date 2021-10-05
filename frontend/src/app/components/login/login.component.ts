import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin: any;
  error: any;



  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signin = {
      username: '',
      password: '',
      email: '',

    };
  }


  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['services']),

      error => {
        this.error = error,
        alert('Invalid User Credentials');

      }

    );
  }


}

