import { Brand, Category, Product } from "./../models/interface-product";
import { Injectable } from "@angular/core";
// Firebase modules for Database, Data list and Single object
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";

@Injectable({
  providedIn: "root",
})
export class ProductsServiveService {
  // productsRef: AngularFireObject<Product> [];   // Reference to Student object, its an Observable too

  public productsRef = this.db.list<Product>("articles-list");
  public brandsRef = this.db.list<Brand>("brands-list");
  public categoriesRef = this.db.list<Category>("categories-list");

  public article: AngularFireObject<Product>;
  public marque: AngularFireObject<Brand>;
  public categorie: AngularFireObject<Category>;

  public Articles: Product[];
  public Brands: Brand[];
  public Categories: Category[];

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
        category: { title: "Cosmetiques" },
        brand: { name: "Armani" },
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
        category: { title: "Cosmetiques" },
        brand: { name: "Armani" },
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
        category: { title: "Alcools" },
        brand: { name: "Armani" },
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
        category: { title: "Téléphonie" },
        brand: { name: "Samsung" },
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
        category: { title: "Accessoires" },
        brand: { name: "Samsung" },
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Magasin",
        },
        city: "Troyes",
        averageStar: 2,
      },
      {
        title: "Bague Trinity de chez Cartier",
        description: "Bagues trois ors entrelacés",
        pictures: [
          "assets/imgs/Cartier/Trinity.png",
          "assets/imgs/Cartier/Trinity_Handwriting.png",
          "assets/imgs/Cartier/Trinity_StandardFonts.png",
          "assets/imgs/Cartier/Trinity.png",
        ],
        id: "6",
        price: 1500,
        category: { title: "Bijoux" },
        brand: { name: "Cartier" },
        state: "Neuf",
        createdAt: new Date(),
        availability: {
          available: true,
          type: "Magasin",
        },
        city: "Lyon",
        averageStar: 5,
      },
    ];

    this.Brands = [
      {
        name: "Cartier",
        site: "https://www.cartier.fr/",
      },
      {
        name: "Armany",
        site: "https://www.armani.com/fr/armanicom",
      },
      {
        name: "Samsung",
        site: "https://www.samsung.com/fr/",
      },
      {
        name: "Diageo",
        site: "https://www.diageo.com/",
      },
      {
        name: "Fred",
        site: "https://www.fred.com/fr_FR/",
      },
      {
        name: "Tiffany",
        site: "https://www.tiffany.fr/",
      },
      {
        name: "Belvedere",
        site: "https://www.belvederevodka.com/fr-fr/",
      },
      {
        name: "Estée Lauder",
        site: "https://www.esteelauder.fr/zq",
      },
      {
        name: "Bulgari",
        site: "https://www.bulgari.com/fr-fr/",
      },
      {
        name: "Campari",
        site: "http://www.campari.com/fr",
      },
      {
        name: "Dior",
        site: "https://www.dior.com/fr_fr",
      },
      {
        name: "Yves Saint-Laurent",
        site: "https://www.ysl.com/fr-fr",
      },
      {
        name: "Disney",
        site: "https://disney.fr/",
      },
      {
        name: "Edrington",
        site: "https://www.edrington.com/",
      },
      {
        name: "Fossil",
        site: "https://www.fossil.com/fr-fr/",
      },
      {
        name: "Hennessy",
        site: "https://www.hennessy.com/fr-fr",
      },
      {
        name: "Jim Beam",
        site: "https://global.jimbeam.com/fr-fr/",
      },
      {
        name: "Peter Graham Dunn",
        site: "https://www.pgrahamdunn.com/",
      },
      {
        name: "Jo Malone",
        site: "https://www.jomalone.com/",
      },
      {
        name: "Glazers",
        site: "http://www.southernglazers.com/",
      },
      {
        name: "Thoma Sabo",
        site: "https://www.thomassabo.com/EU/fr_FR/home?georedirected=true",
      },
    ];

    this.Categories = [
      {
        title: "Cosmetiques",
      },
      {
        title: "Bijoux",
      },
      {
        title: "Téléphonie",
      },
      {
        title: "Alcools",
      },
      {
        title: "Parfums",
      },
      {
        title: "Décoration",
      },
      {
        title: "Jouets",
      },
      {
        title: "Maison",
      },
      {
        title: "Mode",
      },
      {
        title: "Accessoires",
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

  // Retourne la liste des marques de la BD
  public GetListBrands() {
    return this.brandsRef;
  }

  // Retourne la liste de Catégories de la BD
  public GetListCategories() {
    return this.categoriesRef;
  }

  // Retourne la liste d'article de démos en dur (pour éviter les ccès à la BD Firestore)
  public GetDemoArticles(): Product[] {
    return this.Articles;
  }

  public GetDemoCategories(): Array<Category> {
    return this.Categories;
  }

  public GetDemoBrands(): Brand[] {
    return this.Brands;
  }

  public AddArticle(article: Product) {
    return this.productsRef.push(article);
  }

  public FillDBWithArticles(articles: Product[]) {
    articles.forEach((p) => {
      this.productsRef.push(p);
      console.log("Produit :", p, " ajouté à la dbFirestore");
    });
  }

  // TODO: Ajouter des filtres de séléctions d'articles (Par catégories, par ville, par types, par dispo, ...)
}
