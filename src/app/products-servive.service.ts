import { Product } from "./../models/interface-product";
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database"; // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: "root",
})
export class ProductsServiveService {
  // productsRef: AngularFireObject<Product> [];   // Reference to Student object, its an Observable too

  public productsRef = this.db.list<Product>("articles-list");
  public article: AngularFireObject<Product>;
  public Articles: Product[];

  constructor(private db: AngularFireDatabase) {
    this.Articles = [
      {
        title: "ACQUA DI GIOIA",
        description:
          "Parfum d'Armani : LoElit irure incididunt deserunt proident.rem",
        pictures: [
          "assets/imgs/Armani/ACQUA_DI_GIOIA_50ML_BOUCHE.png",
          "assets/imgs/Armani/ACQUA_DI_GIOIA_50ML_COEURPLEIN.png",
          "assets/imgs/Armani/ACQUA_DI_GIOIA_50ML_NAME.png",
          "assets/imgs/Armani/ACQUA_DI_GIOIA_50ML_NAME.png",
        ],
        id: "1",
        price: 75,
        category: "Cosmétique",
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Livraison",
          feed: 10,
        },
        city: "Lyon",
        averageStar: 5,
      },
      {
        title: "1001 NUITS",
        description:
          "Parfum d'Armani : LoElit irure incididunt deserunt proident.rem",
        pictures: [
          "assets/imgs/Armani/1001_NUITS_100ML_NAME.png",
          "assets/imgs/Armani/1001_NUITS_100ML_NOM.png",
          "assets/imgs/Armani/1001_NUITS_250ML_NAME.png",
          "assets/imgs/Armani/1001_NUITS_250ML_NOM.png",
        ],
        id: "2",
        price: 50,
        category: "Cosmétique",
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Livraison",
          feed: 5,
        },
        city: "Lyon",
        averageStar: 4,
      },
      {
        title: "Blade Bow",
        description:
          "Whisky Haut de Gamme : LoElit irure incididunt deserunt proident.rem",
        pictures: [
          "assets/imgs/Diageo/BladeBow_750ml (2).png",
          "assets/imgs/Diageo/BladeBow_750ml.png",
          "assets/imgs/Diageo/BladeBow22.png",
          "assets/imgs/Diageo/BladeBow22v2.png",
        ],
        id: "3",
        price: 90,
        category: "Spiritueux",
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Magasin",
        },
        city: "Lyon",
        averageStar: 4,
      },
      {
        title: "Note 4",
        description:
          "Smartphone Samsung Haut de gamme : LoElit irure incididunt deserunt proident.rem",
        pictures: [
          "assets/imgs/Samsung/NOTE 4_S VIEW WALLET_EF-EN910F.png",
          "assets/imgs/Samsung/Note4_Edge.png",
          "assets/imgs/Samsung/Note4.png",
          "assets/imgs/Samsung/Note5.png",
        ],
        id: "4",
        price: 90,
        category: "Téléphone",
        state: "Occasion",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Magasin",
        },
        city: "Paris",
        averageStar: 3,
      },
      {
        title: "Note 4",
        description:
          "Coque pour Smartphone Samasung: LoElit irure incididunt deserunt proident.rem",
        pictures: [
          "assets/imgs/Samsung/CG920B_Front.png",
          "assets/imgs/Samsung/CG920B_BackBlueBlack.png",
          "assets/imgs/Samsung/CG920B_BackSilverYellowOrangeGold.png",
          "assets/imgs/Samsung/CG920B_Back.png",
        ],
        id: "5",
        price: 90,
        category: "Accessoire",
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Magasin",
        },
        city: "Troyes",
        averageStar: 2,
      },
    ];
  }

  // TODO: Obtenir les datas directement de la base firestore

  // Récupère un article dans la base grace à son id
  public GetArticle(id: string) {
    this.article = this.db.object("products-list/");
    return this.article;
  }

  // Retourne la liste d'article de la base de données Firestore
  public GetListArticles() {
    return this.productsRef;
  }

  // Retourne la liste d'article de démos en dur (pour éviter les ccès à la BD Firestore)
  public GetDemoArticles()
  {
    return this.Articles;
  }

  public AddArticle(article: Product) {
    return this.productsRef.push(article);
  }

  //TODO: Ajouter des filtres de séléctions d'articles (Par catégories, par ville, par types, par dispo, ...)
}
