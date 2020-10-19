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
  public products: Product[];
  public category: Category;

  public folder: string;

  constructor(
    public productService: ProductsServiveService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.folder = this.route.snapshot.paramMap.get("title");
    console.log(this.folder);

    this.route.queryParams.subscribe((params) => {
      console.log(
        "ProductByCategory NgInit : ",
        this.router.getCurrentNavigation().extras.state.category
      );
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.category);

        this.category = this.router.getCurrentNavigation().extras.state.category;
      }
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
