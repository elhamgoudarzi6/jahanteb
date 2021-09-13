import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) {
  }

  onDisplayBasket(data: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/basketList', data);
  }

  getPayment(data: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/getPayment', data);
  }

  getUser(id: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getUser/'+id);
  }

  updateUser(id: any, data: any) {
    return this.http.put('http://api.jahantebkhoram.ir/api/v1/user/updateUser/'+id, data);
  }

  changePasswordUser(id: any, data: any) {
    return this.http.put('http://api.jahantebkhoram.ir/api/v1/user/changePassword/' + id, data);
  }

  uploadProfileFile(image: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/upload', image);
  }

  getOrder(orderId: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getOrder/' + orderId);
  }

  getAllOrderByUser(userId: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllOrderByUser/' + userId);
  }
  deleteOrder(orderID: any) {
    return this.http.delete('http://api.jahantebkhoram.ir/api/v1/user/deleteOrder/' + orderID);
  }
  updateOrder(orderID: any,data:any) {
    return this.http.put('http://api.jahantebkhoram.ir/api/v1/user/updateOrder/' + orderID,data);
  }
  getDetailOrder(orderID: any) {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getOrder/' + orderID);
  }
  changeMobileNumber(id: any, data: any) {
    return this.http.put('http://api.jahantebkhoram.ir/api/v1/user/changeMobileNumber/' + id, data);
  }
  sendCodeToEmail(data: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/sendCodeToEmail', data);
  }
}
