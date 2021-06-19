import {Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'section-one',
  templateUrl: 'section-one.html'
})

export class SectionOneComponent implements OnInit {

  public cardClass = 'page-column';

  constructor() {
  }

  ngOnInit() {
  }
}
