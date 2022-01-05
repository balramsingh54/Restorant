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

  postlist(data:any){
    // console.log(data)
    return this.http.post(this.url,data)
  }

  deleteresto(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  getcurrentresto(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateresto(id:any, data:any){
  return this.http.put(`${this.url}/${id}`,data)
  }

}
