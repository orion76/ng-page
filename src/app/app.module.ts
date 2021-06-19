import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageMainModule} from './page/page-main.module';
import {MenubarModule} from 'primeng/menubar';
import {RouterModule} from '@angular/router';
import {ScrollTopModule} from 'primeng/scrolltop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MenubarModule,
    PageMainModule,
    ScrollTopModule
  ],
  providers: [
    // {provide: DATA_SERVICE, useClass: DataService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
