import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LunchPage } from '../pages/lunch/lunch';
import { SnacksPage } from '../pages/snacks/snacks';
import { BreakfastPage } from '../pages/breakfast/breakfast';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';

@NgModule({
  declarations: [
    MyApp,
    LunchPage,
    SnacksPage,
    BreakfastPage,
    TabsPage,
    SettingsPage,
    AccountPage
  ],
  imports: [
      IonicModule.forRoot(MyApp, { tabsPlacement: 'top' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LunchPage,
    SnacksPage,
    BreakfastPage,
    TabsPage,
    AccountPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
