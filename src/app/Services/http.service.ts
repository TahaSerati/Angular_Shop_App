import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user-interface';
import { IProduct } from '../interfaces/product-interface';
import { ISliderMd } from '../interfaces/sliderMd-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

const NeshanHeader = {
  'Authorization': `Bearer web.3cbdb2cbca5e4965b5ebfdb5f3e3c8cf`
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  usersAPI: string = "http://localhost:3000/users"
  productsAPI: string = "http://localhost:3000/products"
  sliderMdAPI: string = "http://localhost:3000/sliderMd"


  constructor(private http: HttpClient) { }

  // getting data
  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersAPI)
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsAPI)
  }

  // get for sliders 
  getAllSliderMdProducts(): Observable<ISliderMd[]> {
    return this.http.get<ISliderMd[]>(this.sliderMdAPI)
  }

  // getAllSliderLgProducts(): Observable<ISliderMd[]> {
  //   return this.http.get<ISliderMd[]>(this.sliderMdAPI)
  // }

  // deleting data
  deleteUser(userToDel: IUser): Observable<IUser> {
    const url = `${this.usersAPI}/${userToDel.id}`;
    return this.http.delete<IUser>(url)
  }

  deleteProduct(productToDel: IProduct): Observable<IProduct> {
    const url = `${this.productsAPI}/${productToDel.id}`;
    return this.http.delete<IProduct>(url)
  }

  // updating data
  updateUser(userToUp: IUser): Observable<IUser> {
    const url = `${this.usersAPI}/${userToUp.id}`;
    return this.http.put<IUser>(url, userToUp, httpOptions)
  }

  updateProduct(productToUp: IProduct): Observable<IProduct> {
    const url = `${this.productsAPI}/${productToUp.id}`;
    return this.http.put<IProduct>(url, productToUp, httpOptions)
  }

  // adding new data
  addNewUser(userToAdd: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.usersAPI, userToAdd, httpOptions)
  }

  addNewProduct(productToAdd: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.productsAPI, productToAdd, httpOptions)
  }

}

// let headers = new HttpHeaders({ 'Content-Type': 'application/json ;  charset=UTF-8' })
// let options = { headres: headers }