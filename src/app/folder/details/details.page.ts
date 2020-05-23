
import { CartPage } from './../cart/cart.page';


import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/interface-product';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/app/shared/authentication-service';
import { MethodService } from 'src/app/method.service';
import { itemCart } from 'src/models/interface-itemCart';





@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class DetailsPage implements OnInit {

  public article: Product;
  public folder: string;

  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    pager: true
  };
  public rate: number;


  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
    private storage: Storage,
    public toastController: ToastController,
    public modal: ModalController,
    public method : MethodService,
    public authService: AuthenticationService) {
    
  }

  logRatingChange(rating): void {
    console.log('changed rating: ', rating);
    this.rate = rating;
  }

  onValidateRate(): void {
    this.article.averageStar = (this.rate + this.article.averageStar) / 2;
    console.log('New AverageStarVale : ', this.article.averageStar);
  }

  addToCart(article: Product): void {
    // console.log("We add in the cart article : this.article");

    // this.storage.set('articleInCart', this.article)
    //   .then(value => alert("La valeur est : " + value))
    //   .catch(err => console.log("Erreur : ", err));

    // console.log(this.storage.get('articleInCart'));

    let added = false;

    // Si le panier est vide, on ajoute l'article au panier
    this.storage.get('Cart').then((items: itemCart[]) => {
      if (items === null || items.length === 0) {
        items = [];
        items.push({
          item: article,
          qty: 1,
          amount: article.price
        });
        added = true;
      }
      else {
        for (let index = 0; index < items.length; index++) {
          const element: itemCart = items[index];
          if (this.article.id === element.item.id) {
            // L'article existe
            element.qty += 1;
            element.amount += this.article.price;
            added = true;
          }
        }
        if (!added) {
          // Le panier n'est pas vide et ne contient pas l'article
          items.push({
            item: article,
            qty: 1,
            amount: article.price
          });
        }
      }
      this.storage.set('Cart', items)
        .then(async items => {

          const toast = await this.toastController.create({
            message: "Article ajouté à votre panier",
            animated: true,
            color: 'primary',
            cssClass: 'toast-success',
            duration: 2000,
            header: '',
            keyboardClose: true,
            mode: 'ios',
            position: 'bottom',
            translucent: true
          });
          toast.present();
        })
        .catch(err => console.log("Erreur durant l'ajout au panier : ", err));
    });
  }

  getArticleInCart(key: string) {
    this.storage.get(key).then(value => {
      console.log('L\'article est : ' + value);
      return value;
    })
      .catch(err => {
        console.log('Ereeur : ' + err);
        return null;
      });
  }

  // openCart(): void {
  //   console.log("Affichage du Panier dans une page Modal");
  //   this.modal.create({component : CartPage});
  //   this.modal.getTop();
    
  // }

  async openCart() {
    const modal = await this.modal.create({
      component: CartPage
    });
    return await modal.present();
  }
  

  ngOnInit() {
    this.folder = this.route.snapshot.paramMap.get("id");
    this.route.queryParams.subscribe(params => {
      console.log("Détails NgInit : ",this.router.getCurrentNavigation().extras.state.article);
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.article);

        this.article = this.router.getCurrentNavigation().extras.state.article;
      }
    });
  }
}


