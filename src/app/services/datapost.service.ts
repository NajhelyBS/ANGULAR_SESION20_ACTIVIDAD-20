import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatapostService {

  //url del api
  urlJson:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  //leyendo la data
  getDataPost(){
    return this.http.get<any>(this.urlJson);
  }

}
