import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  signOut() {
    this.authenticationService.SignOut();
  }
  
  ngOnInit(): void {}
}
