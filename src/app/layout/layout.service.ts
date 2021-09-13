import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) {
  }


  // #region category
  getAllCategory(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllCategory');
  }

  allProductBySubCategoryID(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/allProductBySubCategoryID/' + id);
  }

//#endregion

  // #region news
  getAllNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllNews');
  }

  getLatestNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getLatestNews');
  }

  getNews(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getNews/' + id);
  }

  getAllTagNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllTagNews');
  }
  // #endregion

  // #region products
  getDiscountProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/discountProduct');
  }

  getNewestProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/newestProduct');
  }

  getProduct(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getProduct/' + id);
  }

  getAllProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllProduct');
  }

  allCommentForProduct(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/allCommentForProduct/' + id);
  }

  countComment(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/countComment/' + id);
  }

  registerComment(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerComment', data);
  }

  registerOrder(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerOrder', data);
  }

  addSmsSubscription(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/addSmsSubscription', data);
  }

  addEmailSubscription(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/addEmailSubscription', data);
  }

  getAllFaq(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllFaq');
  }

  postContactUs(data: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerContactUs', data);
  }

  advanceSearchProduct(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/advanceSearchProduct', data);
  }
  getAllCatalog(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getCatalog');
  }
}
