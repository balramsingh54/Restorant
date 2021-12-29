import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RastoService {
  url= "http://localhost:3000/restorant"

  constructor( private http: HttpClient) {  }
  
  getlist(){
    return this.http.get(this.url)
  }
}

