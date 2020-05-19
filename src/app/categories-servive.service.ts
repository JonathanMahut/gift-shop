import { Category } from './../models/interface-category';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})
export class CategoriesServiveService {

  categoriessRef = this.db.list<Category>('categories-list');
  category : AngularFireObject<Category>;

  constructor(private db: AngularFireDatabase) { }

  
}
