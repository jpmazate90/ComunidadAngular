import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:8080/api/users/987654222';


  constructor(private _http: HttpClient) { }


  getUsers(){
    
    return this._http.get<User>(this.apiUrl);
  }
}
