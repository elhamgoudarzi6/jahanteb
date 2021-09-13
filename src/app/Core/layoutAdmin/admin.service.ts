import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  login(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/loginAdmin',
      data
    );
  }
  changePassword(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/changePassword/' + id,
      data
    );
  }
  changeUsername(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/changeUsername/' + id,
      data
    );
  }
  resetPassword(data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/resetPassword',
      data
    );
  }
  uploadFile(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/upload',
      data
    );
  }
  uploadMultiFiles(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/multiUpload',
      data
    );
  }

  //#region Administrator
  getAllAdmininstrators(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllAdmin'
    );
  }
  addAdmin(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerAdmin',
      data
    );
  }
  editAdmin(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateAdmin/' + id,
      data
    );
  }
  deleteAdmin(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteAdmin/' + id
    );
  }
  //#endregion

  //#region Categories
  getAllCategories(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllCategory'
    );
  }

  addCategory(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerCategory',
      data
    );
  }
  editCategory(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateCategory/' + id,
      data
    );
  }
  deleteCategory(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteCategory/' + id
    );
  }

  addSubCategory(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerSubCategory',
      data
    );
  }
  editSubCategory(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateSubCategory/' + id,
      data
    );
  }
  deleteSubCategory(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteSubCategory/' + id
    );
  }
  //#endregion

  //#region News
  getAllNews(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllNews'
    );
  }

  addNews(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerNews',
      data
    );
  }
  editNews(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateNews/' + id,
      data
    );
  }
  deleteNews(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteNews/' + id
    );
  }

  //#endregion

  //#region Products
  getAllProducts(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllProduct'
    );
  }

  addProduct(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerProduct',
      data
    );
  }
  editProduct(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateProduct/' + id,
      data
    );
  }
  deleteProduct(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteProduct/' + id
    );
  }

  //#endregion

  //#region Comment
  getAllComments(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllComment'
    );
  }
  commentCount(id: any): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/countComment/' + id
    );
  }
  deleteComment(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteComment/' + id
    );
  }
  activeOrDeactiveComment(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/activeOrDeactiveComment/' + id,
      data
    );
  }
  replyComment(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/replyComment/' + id,
      data
    );
  }
  //#endregion

  //#region Discounts
  getAllDiscounts(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllDiscount'
    );
  }
  addDiscount(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerDiscount',
      data
    );
  }
  editDiscount(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateDiscount/' + id,
      data
    );
  }
  deleteDiscount(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteDiscount/' + id
    );
  }
  //#endregion

  //#region Users
  getAllUsers(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllUser'
    );
  }
  getUser(id: any): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getUser/' + id
    );
  }
  addUser(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerUser',
      data
    );
  }
  editUser(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateUser/' + id,
      data
    );
  }
  deleteUser(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteUser/' + id
    );
  }
  //#endregion

  //#region Orders
  getAllOrders(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllOrder'
    );
  }
  getOrder(id: any): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getOrder/' + id
    );
  }
  editOrderStatus(id: any, data: any): any {
    return this.http.put(
      'http://api.jahantebkhoram.ir/api/v1/admin/updateStatusOrder/' + id,
      data
    );
  }
  deleteOrder(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteOrder/' + id
    );
  }
  //#endregion
  //#region ContactFormMessages
  getAllContactFormMessages(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getAllContactUs'
    );
  }
  getContactFormMessage(id: any): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getContactUs/' + id
    );
  }
  deleteContactFormMessage(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteContactUs/' + id
    );
  }
  //#endregion

  //#region Subscriptions
  getAllEmailSubscriptions(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getEmailSubscription'
    );
  }
  getAllSmsSubscriptions(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getSmsSubscription'
    );
  }
  deleteSmsSubscription(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteEmailSubscription/' + id
    );
  }
  deleteEmailSubscription(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteContactUs/' + id
    );
  }
  //#endregion

  //#region Faqs
  getAllFaqs(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/admin/getAllFaq');
  }
  addFaq(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerFaq',
      data
    );
  }
  deleteFaq(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteFaq/' + id
    );
  }
  //#endregion

  //#region Catalog
  getCatalog(): any {
    return this.http.get(
      'http://api.jahantebkhoram.ir/api/v1/admin/getCatalog'
    );
  }
  addCatalog(data: any): any {
    return this.http.post(
      'http://api.jahantebkhoram.ir/api/v1/admin/registerCatalog',
      data
    );
  }
  deleteCatalog(id: any): any {
    return this.http.delete(
      'http://api.jahantebkhoram.ir/api/v1/admin/deleteCatalog/' + id
    );
  }
  //#endregion
}
