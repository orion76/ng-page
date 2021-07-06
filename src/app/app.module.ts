import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageMainModule} from './page/page-main.module';
import {MenubarModule} from 'primeng/menubar';
import {ScrollTopModule} from 'primeng/scrolltop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ScrollTopModule,
    PageMainModule,
    SharedModule,
    MegaMenuModule,
  ],
  providers: [
    // {provide: DATA_SERVICE, useClass: DataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
