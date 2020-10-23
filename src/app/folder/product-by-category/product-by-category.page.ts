import { Product } from "src/models/interface-product";
import { Category } from "./../../../models/interface-product";
import { ProductsServiveService } from "./../../products-servive.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-by-category",
  templateUrl: "./product-by-category.page.html",
  styleUrls: ["./product-by-category.page.scss"],
})
export class ProductByCategoryPage implements OnInit {
  public products: Array<Product> = [];
  public category: Category;

  public folder: string;

  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    pager: true,
  };

  constructor(
    public productService: ProductsServiveService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      console.log(this.router.getCurrentNavigation().extras.state.category);

      this.category = this.router.getCurrentNavigation().extras.state.category;
    }
    console.log("I'm a Product By Cat named : " + this.category.title);
    this.getProductsByCat();
  }

  getProductsByCat() {
    const demoArticle = this.productService.GetDemoArticles();
    demoArticle.forEach((element) => {
      console.log("List of Elements) " + element.category.title);
      if (element.category.title === this.category.title) {
        console.log("Found a product in this cat : " + element.category.title);
        let article: Product;
        article = element;
        this.products.push(article);
      }
    });
  }

  ngOnInit() {
    this.folder = this.route.snapshot.paramMap.get("title");
    console.log(this.folder);

    this.route.queryParams.subscribe((params) => {
      console.log(
        "ProductByCategory NgInit : ",
        this.router.getCurrentNavigation().extras.state.category
      );
    });

    // this.folder = this.route.snapshot.paramMap.get("title");
    // console.log(this.folder);

    // this.route.queryParams.subscribe((params) => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     console.log(this.router.getCurrentNavigation().extras.state.category);

    //     this.category = this.router.getCurrentNavigation().extras.state.category;
    //   }
    // });
  }
}
