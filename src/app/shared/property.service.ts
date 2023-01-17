import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  // now add get,post and put method here
  // adding property using post method
  addListing(data:any){
    return this.http.post('http://localhost:3000/propertis',data).pipe(map((res:any)=>
    {
       return res;
    }))
    
  }
  //get all property using get method
  getAllProp(){
    return this.http.get('http://localhost:3000/propertis').pipe(map((res:any)=>
    {
       return res;
    }))

  }
  //update property using put method
  updatePrp(data:any,id:number){
    return this.http.put('http://localhost:3000/propertis/' +id,data).pipe(map((res:any)=>
    {
       return res;
    }))
    
  }
  // delete property using delete method
  deletePrp(id:number){
    return this.http.delete('http://localhost:3000/propertis/' +id).pipe(map((res:any)=>
    {
       return res;
    }))
  }
    
  
}
