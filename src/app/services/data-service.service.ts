import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Make the service globally available
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    // Example API endpoint
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<any>(url); // Replace with your API call details
  }
  getData2() {
    // Example API endpoint
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get<any>(url); // Replace with your API call details
  }
}
