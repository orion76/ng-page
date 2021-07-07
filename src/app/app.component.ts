import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {mainMenuItems} from './content/main-menu.content';
import {Meta} from '@angular/platform-browser';


const metaDescription = `Обзор интернет-ресурсов, посвященных Прямой демократии, народовластию и самоуправлению`;
const metaKeywords = `прямая демократия, народовластие, самоуправление`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: MenuItem[] = mainMenuItems;
  title = 'ng-page';

  constructor(private meta: Meta) {
    this.meta.addTag({name: 'description', content: metaDescription});
    this.meta.addTag({name: 'keywords', content: metaKeywords});
  }
}
