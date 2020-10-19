import { Category } from "./../models/interface-product";
import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { NavigationExtras, Router } from "@angular/router";
import { ProductsServiveService } from "./products-servive.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/folder",
      icon: "home",
    },
    {
      title: "Login",
      url: "/login",
      icon: "log-in",
    },
    {
      title: "Register",
      url: "/register",
      icon: "person-circle",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "paper-plane",
    },
    {
      title: "About",
      url: "/about",
      icon: "information",
    },
    {
      title: "Create-Product",
      url: "/create-product",
      icon: "information",
    },
    {
      title: "Details",
      url: "/details",
      icon: "information",
    },
    {
      title: "Panier",
      url: "/cart",
      icon: "cart",
    },
    {
      title: "Produits par Categorie",
      url: "/productsByCategory",
      icon: "cart",
    },
  ];
  // public labels = ['Cosmétique', 'Parfum', 'Téléphonie', 'Accesoire', 'High-Tech', 'Spiritueux'];
  public labels: Category[];
  public category: Category;

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public productService: ProductsServiveService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  showProductsByCategory(label: Category) {
    this.category = label;
    const navigationExtras: NavigationExtras = {
      state: {
        category: this.category,
      },
    };
    console.log("Selected Cat : " + this.category.title);

    this.router.navigate(["/productsByCategory"], navigationExtras);
  }

  ngOnInit() {
    // this.productService.GetDemoCategories().forEach((element) => {
    //   console.log(element.title);

    //   this.labels.push(element);
    // });

    this.labels = this.productService.GetDemoCategories();

    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
