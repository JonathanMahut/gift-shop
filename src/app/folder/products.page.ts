import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';
import { Product } from 'src/models/interface-product';
import { ModalController } from '@ionic/angular';
import { MethodService } from '../method.service';
import { ProductsServiveService } from '../products-servive.service';

@Component({
  selector: 'app-folder',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public Articles: Product[]; // A remplacer par le contenu d'une BD ???
  public article: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authService: AuthenticationService,

    public method: MethodService,
    public productService: ProductsServiveService,
    private router: Router
  ) {
    // On va simuler le fait que les articles proviennent d'une base de données
    this.Articles = this.productService.GetDemoArticles();

  }

  ngOnInit() {
  // /  this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  showDetails(article: Product) {
    // console.log("Folder --> article", article);

    // this.router.navigate(['/details', article]);

    this.article = article;
    const navigationExtras: NavigationExtras = {
      state: {
        article: this.article
      }
    };
    // console.log(navigationExtras);

    this.router.navigate(['/details'], navigationExtras);
  }

  showImage(picture: any, event) {
    return this.method.showImage(picture, event);
  }

  createProduct() {}
}
