import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';
import { Product } from 'src/models/interface-product';
import { ModalController } from '@ionic/angular';
import { MethodService } from '../method.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public Articles: Product[]; // A remplacer par le contenu d'une BD ???
  public article: Product;


  constructor(
    private activatedRoute: ActivatedRoute,
    public authService : AuthenticationService,
    public modalController: ModalController,
    public method: MethodService,
   ) { 
     // On va simuler le fait que les articles proviennent d'une base de données
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

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  showDetails(article: Product) {
   
  }

  showImage(picture: any, event) {
    return this.method.showImage(picture, event);
  }

  createProduct() {
   
  }

}
