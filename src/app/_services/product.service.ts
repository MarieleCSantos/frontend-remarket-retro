import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { OrderDetails } from '../_model/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("https://fearless-luck-production.up.railway.app/addNewProduct", product);
  }

  public getAllProducts(pageNumber, searchKeyword: string = "") {
    return this.httpClient.get<Product[]>("https://fearless-luck-production.up.railway.app/getAllProducts?pageNumber="+pageNumber
      +"&searchKey="+searchKeyword);
  }

  public getProductDetailsById(productId) {
    return this.httpClient.get<Product>("https://fearless-luck-production.up.railway.app/getProductDetailsById/" + productId);
  }

  public deleteProduct(productId: number) {
    return this.httpClient.delete("https://fearless-luck-production.up.railway.app/deleteProductDetails/" + productId);
  }

  public getProductDetails(isSingleProductCheckout, productId) {
    return this.httpClient.get<Product[]>("https://fearless-luck-production.up.railway.app/getProductDetails/" +
      isSingleProductCheckout + "/" + productId);
  }

  public placeOrder(orderDetails: OrderDetails) {
    return this.httpClient.post("https://fearless-luck-production.up.railway.app/placeOrder", orderDetails);
  }

  public addToCart(productId) {
    return this.httpClient.get("https://fearless-luck-production.up.railway.app/addToCart/" + productId);
  }

  public getCartDetails() {
    return this.httpClient.get("https://fearless-luck-production.up.railway.app/getCartDetails");
  }
}
