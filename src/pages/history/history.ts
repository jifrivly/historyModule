import { Component } from '@angular/core';

import { TemperaturePage } from './temperature/temperature';
import { HumidityPage } from './humidity/humidity';

@Component({
  templateUrl: 'history.html'
})
export class TabsPage {

  tab1Root = TemperaturePage;
  tab2Root = HumidityPage;

  constructor() {

  }
}
