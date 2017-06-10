import { Component } from '@angular/core';

import { BreakfastPage } from '../breakfast/breakfast';
import { LunchPage } from '../lunch/lunch';
import { SnacksPage } from '../snacks/snacks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BreakfastPage;
  tab2Root: any = LunchPage;
  tab3Root: any = SnacksPage;

  constructor() {

  }
}
