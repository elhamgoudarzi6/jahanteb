import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(data: any): Observable<any> {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerUser', data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/loginUser', data);
  }

  resetPasswordUser(data: any) {
    return this.http.put('http://api.jahantebkhoram.ir/api/v1/user/resetPassword', data);
  }

  changePasswordUser(id: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/changePassword/' + id);
  }

  getUser(id: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getUser/' + id);
  }
}
