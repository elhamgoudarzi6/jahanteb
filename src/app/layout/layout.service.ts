import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  baseUrl = 'https://api.jahantebkhoram.ir/api/v1/user/';

  constructor(private http: HttpClient) { }


//   getAllLoans(token: string): any {
//     const params = new HttpParams().set('token', token);
//    return this.http.get(this.baseUrl + 'loan',{params});
//  }

  registerUser(data: any) {
    return this.http.post(this.baseUrl + 'registerUser', data);
  }

  loginUser(data: any) {
    return this.http.post(this.baseUrl + 'loginUser', data);
  }

  resetPasswordUser(data: any) {
    return this.http.put(this.baseUrl + 'resetPassword', data);
  }

  changePasswordUser(id: any) {
    return this.http.get(this.baseUrl + 'changePassword/' + id);
  }

  getUser(id: any) {
    return this.http.get(this.baseUrl + 'getUser/' + id);
  }
  // #region category
  getAllCategory(): any {
    return this.http.get(this.baseUrl + 'getAllCategory');
  }

  allProductBySubCategoryID(id: any): any {
    return this.http.get(this.baseUrl + 'allProductBySubCategoryID/' + id);
  }

  //#endregion

  // #region news
  getAllNews(): any {
    return this.http.get(this.baseUrl + 'getAllNews');
  }

  getLatestNews(): any {
    return this.http.get(this.baseUrl + 'getLatestNews');
  }

  getNews(id: any): any {
    return this.http.get(this.baseUrl + 'getNews/' + id);
  }

  getAllTagNews(): any {
    return this.http.get(this.baseUrl + 'getAllTagNews');
  }
  // #endregion

  // #region products
  getDiscountProduct(): any {
    return this.http.get(this.baseUrl + 'discountProduct');
  }

  getNewestProduct(): any {
    return this.http.get(this.baseUrl + 'newestProduct');
  }

  getProduct(id: any): any {
    return this.http.get(this.baseUrl + 'getProduct/' + id);
  }

  getAllProduct(): any {
    return this.http.get(this.baseUrl + 'getAllProduct');
  }

  allCommentForProduct(id: any): any {
    return this.http.get(this.baseUrl + 'allCommentForProduct/' + id);
  }

  countComment(id: any): any {
    return this.http.get(this.baseUrl + 'countComment/' + id);
  }

  registerComment(data: any): any {
    return this.http.post(this.baseUrl + 'registerComment', data);
  }

  registerOrder(data: any): any {
    return this.http.post(this.baseUrl + 'registerOrder', data);
  }

  addSmsSubscription(data: any): any {
    return this.http.post(this.baseUrl + 'addSmsSubscription', data);
  }

  addEmailSubscription(data: any): any {
    return this.http.post(this.baseUrl + 'addEmailSubscription', data);
  }

  getAllFaq(): any {
    return this.http.get(this.baseUrl + 'getAllFaq');
  }

  postContactUs(data: any) {
    return this.http.post(this.baseUrl + 'registerContactUs', data);
  }

  advanceSearchProduct(data: any): any {
    return this.http.post(this.baseUrl + 'advanceSearchProduct', data);
  }
  getAllCatalog(): any {
    return this.http.get(this.baseUrl + 'getCatalog');
  }


  getTokenSms(): any {
    let data = {
      UserApiKey: 'f2a1c337366e0cd3ddffc337',
      SecretKey: 'it66)%#teBC!@*&',
    };
    return this.http.post('https://RestfulSms.com/api/Token', data);
  }

  sendSms(data: any, token: any): any {
    const headers = {
      'content-type': 'application/json',
      'x-sms-ir-secure-token': token,
    };
    return this.http.post('https://RestfulSms.com/api/UltraFastSend', data, { 'headers': headers });
  }

}

