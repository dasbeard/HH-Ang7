import { Injectable } from '@angular/core';
import { Location } from '../models/Location';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dummyData: Location = {
    id: 1,
    title: 'Test Title',
    website: 'Test Website',
    userEmail: 'Test userEmail',
    contactEmail: 'Test contactEmail',
    contactPhone: 5555555555,
    fullAddress: 'Test full Address',
    streetAddress1: 'Test StreetAddress1',
    streetAddress2: 'Test StreetAddress2',
    city: 'Test city',
    state: 'Test state',
    zipcode: 12345,
    country: 'Test country',
    aboutUs: 'Test About US',
    // servingMon: Hours,
    servingTue: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // servingWen: Hours,
    servingThur: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // servingFri: Hours,
    servingSat: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // servingSun: Hours,
    mon: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // tue: Hours,
    wen: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // thur: Hours,
    fri: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    // sat: Hours,
    sun: { day: 'Tuesday', openTime: 12, openPeriod: 'am', closeTime: 12, closePeriod: 'pm' },
    servicesAvailable: {
      beds: true, clothing: true, childCare: false, recActivities: false, donations: true, education: false, jobPlacement: true, interview: false
    },
    otherServices: 'Here is a small description of other services available at this location'
  };

  constructor() { }


  // TODO: Make API Call as first thing when using this method
  getLocationData() {
    console.log('Get Location Data method was called');

  }

}
