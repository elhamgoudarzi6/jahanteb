import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) {
  }


  baseUrl = 'https://api.jahantebkhoram.ir/api/v1/user/';

  getToken(id: string): any {
    let body = {
      SecretKey: 'sadas@!$@#%!^#!GSDGETWT@#OI%J@#%!*#)^U#)^U!@)U',
    };
    return this.http.post(this.baseUrl + 'getToken/' + id, body);
  }

  getUser(id: any) {
    return this.http.get(this.baseUrl + 'getUser/'+id);
  }

  updateUser(id: any, data: any) {
    return this.http.put(this.baseUrl + 'updateUser/'+id, data);
  }

  changePasswordUser(id: any, data: any) {
    return this.http.put(this.baseUrl + 'changePassword/' + id, data);
  }

  uploadProfileFile(image: any) {
    return this.http.post(this.baseUrl + 'upload', image);
  }

  getOrder(token: string, id: string): any {
    const params = new HttpParams().set('token', token);
    return this.http.get(this.baseUrl + 'getOrder/' + id, { params });
  }
  getAllOrderByUser(token: string, id: string): any {
    const params = new HttpParams().set('token', token);
    return this.http.get(this.baseUrl + 'getAllOrderByUser/' + id, { params });
  }
  updateOrder(token: string, id: string, data: any): any {
    const params = new HttpParams().set('token', token);
    return this.http.put(this.baseUrl + 'updateOrder/' + id, data, { params });
  }
  deleteOrder(token: string, id: string): any {
    const params = new HttpParams().set('token', token);
    return this.http.delete(this.baseUrl + 'deleteOrder/' + id, { params });
  }
  getDetailOrder(token: string, id: string): any {
    const params = new HttpParams().set('token', token);
    return this.http.get(this.baseUrl + 'getDetailOrder/' + id, { params });
  }
  changeMobileNumber(token: string, id: string, data: any): any {
    const params = new HttpParams().set('token', token);
    return this.http.put(this.baseUrl + 'changeMobileNumber/' + id, data, { params });
  }

}
