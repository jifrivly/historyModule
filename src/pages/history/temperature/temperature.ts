import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the TemperaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html',
})
export class TemperaturePage {

  graphPeriod: string = "day";
  monitoredSpace = null;
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.isAndroid = this.platform.is("android");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemperaturePage');
  }

}
