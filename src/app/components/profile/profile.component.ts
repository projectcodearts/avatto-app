import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdersPage } from '../../allPages/orders/orders.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: OrdersPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

}
