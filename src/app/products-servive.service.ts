import { Product } from './../models/interface-product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class ProductsServiveService {
  // productsRef: AngularFireObject<Product> [];   // Reference to Student object, its an Observable too
  productsRef = this.db.list<Product>('articles-list');
  article :AngularFireObject<Product>;

  constructor(private db: AngularFireDatabase) { }

  GetArticleS(id: string) {
    this.article = this.db.object('products-list/');
    return this.article;
  }

  GetListArticles (){
    return this.productsRef;
  }

  AddArticle(article : Product){
    return this.productsRef.push(article);
  }
}
