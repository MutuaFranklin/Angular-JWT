import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$!: Observable<boolean>;



  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    // this.isLoggedIn$ = this.authService.isLoggedIn

  }

}
