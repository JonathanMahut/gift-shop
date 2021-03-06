import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/shared/authentication-service";
import { Product, Availability } from "src/models/interface-product";
import { v4 as uuidv4 } from "uuid";

import {
  ImagePicker,
  ImagePickerOptions,
  OutputType,
} from "@ionic-native/image-picker/ngx";
import { FILE } from "dns";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.page.html",
  styleUrls: ["./create-product.page.scss"],
})
export class CreateProductPage implements OnInit {
  public myProduct: Product;
  categories = [];
  cities = [];

  //TODO: ajouter le photoPicker pour séléctionner les photos de l'article à vendre

  constructor(
    public authService: AuthenticationService,
    private imagePicker: ImagePicker
  ) {
    this.myProduct = {} as Product;
    this.myProduct.availability = {} as Availability;
    this.myProduct.pictures = [];
    this.categories = [
      {
        title: "Cosmetique et Parfums",
      },
      {
        title: "Spiritueux",
      },
      {
        title: "Téléphonie",
      },
      {
        title: "Accessoire",
      },
      {
        title: "High Tech",
      },
      {
        title: "Livres et Produits culturels",
      },
      {
        title: "Habillement et Mode",
      },
    ];
    this.cities = [
      {
        title: "Londre",
      },
      {
        title: "New-York",
      },
      {
        title: "Paris",
      },
      {
        title: "Lyon",
      },
      {
        title: "Troyes",
      },
      {
        title: "Mulhouse",
      },
      {
        title: "Chalamont",
      },
      {
        title: "Lorient",
      },
    ];
  }

  createProduct(product: Product) {
    this.myProduct.createdAt = new Date();
    this.myProduct.averageStar = 0;
    this.myProduct.availability.available = true;
    this.myProduct.id = uuidv4();

    console.log("myProduct : ", this.myProduct);
  }
  pickImages() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 5,
      outputType: OutputType.FILE_URL,
    };
    this.imagePicker
      .getPictures(options)
      .then((results) => {
        console.log(results);
      })
      .catch((error) => console.log("Erreur : ", error));
  }

  ngOnInit() {}
}
