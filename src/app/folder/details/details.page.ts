import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/interface-product';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public article: Product;
  public products : Product[];

  constructor(public activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
   // this.article.id = this.activatedRoute.snapshot.paramMap.get('article.id');

    this.activatedRoute.paramMap.subscribe(params => {
      this.products.forEach((p: Product) => {
        if (p.id == params.get('article.id')) {
          this.article = p;
        }
      });
    });
  }

}
