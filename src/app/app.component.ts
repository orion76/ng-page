import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {mainMenuItems} from './content/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: MenuItem[] = mainMenuItems;
  title = 'ng-page';

  constructor() {
  }
}
