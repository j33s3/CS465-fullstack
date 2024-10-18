import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/Authentication.service';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from '../trip-listing/trip-listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TripListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor (
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  public isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }
}