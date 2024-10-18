import { Component, OnInit } from '@angular/core';
import { trips } from "../data/trips";
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { Trip } from '../service/trip';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/Authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  
  trips!: Trip[];
  message: string = '';

  constructor(
    private TripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.TripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }


  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
}
  
  
  
  
  // trips: Array<any> = trips;

  // constructor() {}

  // ngOnInit(): void {
      
  // }

}
