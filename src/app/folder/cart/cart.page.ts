import { Product } from './../../models/interface-product';
import { element } from 'protractor';
import { itemCart } from './../../models/interface-itemCart';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  public total: number = 0;
  cartItems: itemCart[];
  constructor(public modal: ModalController, public storage: Storage, public toastCtrl: ToastController, public alertCtrl : AlertController) {

   // On récupère le contenu sauvegardé en Local (IndexedDB)
    this.storage.get('Cart')
      .then((data: itemCart[]) => {
        this.cartItems = data;
        this.cartItems.forEach((element) => {
          //On teste si la valeur optionnelle feed est remplie en regardant si le type d'avalaibility = 'magasin'
          if (element.item.availability.type === 'Magasin') { 
            element.item.availability.feed = 0; // On affecte une valeur Zero pour éviter le NotANumber
          }
          this.total += (element.qty * element.item.price) + element.item.availability.feed;
        });
      })
      .catch(err => {
        console.log('Erreur dans CartPage storageGet : ', err);
      });
  }

  

 async removeItem(article : itemCart, i:number) 
  {
    const alert = await this.alertCtrl.create({
      header: 'Confirmez la suppression!',
      message: 'Etes-vous sûr de vouloir supprimer ' + article.item.title + ' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Suppression annulée');
          }
        }, {
          text: 'Retirer',
          handler: () => {
            // On récupère les values pour la mise à jour du Total Panier
            let price = article.item.price;
            let qty = article.qty;
            let feed = article.item.availability.feed;
            this.cartItems.splice(i,1) //enlève des éléments du tableau
            this.storage.set('Cart', this.cartItems).then( async (data)=>{ //On supprime de IndexedDB 
              const toast = await this.toastCtrl.create({ //On affiche un toast d'information
                message: "Article suprimmé du panier !",
                animated: true,
                duration: 1000
              });
              toast.present();
            }).catch(err =>console.log("Erreur durant la suppression de l'article dans l'IndexedDB ! : ", err))
            if (article.item.availability.type==='Magasin')
            {
              feed = 0;
            }
            this.total -= feed = (qty*price); //On met à jour le Total du panier
          }
        }
      ]
    });

    await alert.present();

    
  }

  fermerModal() {
    this.modal.dismiss();

  }

  // ionViewDidLoad()
  // {
  //   console.log("ionViewDidLoad CartPage");
  //   this.storage.get("Cart")
  //     .then((data : itemCart[]) =>{
  //       this.cartItems = data;})
  //     .catch(err =>{
  //       console.log("Erreur dans CartPage storageGet : ",err)});
  // }

  ngOnInit() {
  }

}
