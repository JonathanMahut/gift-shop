import { Injectable } from '@angular/core';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor(public modalController: ModalController) {

  }

 public  async  showImage(picture: any, event) {
    event.stopPropagation(); // on arrête la propagation de l'évènement onclick pour éviter de tomber ensuite sur le showDetails
    // console.log("Infos Image : ",picture );

    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: picture
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
