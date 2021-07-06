import {NgModule} from '@angular/core';

import {CardModule} from 'primeng/card';
import {SectionOneComponent} from '../content/page-main/section-one';
import {PageMainComponent} from './page-main.component';
import {SectionTwoComponent} from '../content/page-main/section-two';
import {SectionThreeComponent} from '../content/page-main/section-three';
import {PanelModule} from 'primeng/panel';
import {DividerModule} from 'primeng/divider';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    DividerModule,
  ],
  exports: [
    PageMainComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
  ],
  declarations: [
    PageMainComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,

  ],
  providers: [],
})
export class PageMainModule {
}
