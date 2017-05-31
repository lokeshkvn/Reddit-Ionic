import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item:any;
  constructor(public params :NavParams, public navCtrl: NavController) {
          this.item = params.get('item');
  }

}
