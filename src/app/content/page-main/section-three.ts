import {Component, OnInit} from '@angular/core';
import {IBlock, IHeader, ILink} from '../common';


const sectionHeader: IHeader = {
  title: 'Блогеры',
  description: 'Видео-ролики, лекции, дискуссии',
};
const blocks: IBlock<ILink[]>[] = [
  {
    title: 'Youtube',
    description: 'Блогеры Ютуба',
    content: [
      {
        title: 'Лекс Кравецкий',
        url: 'https://www.youtube.com/channel/UChaVzaxNKR-I6i43Qkacw7A',
        description: 'Блогер, писатель, программист, теоретик Прямой демократии.'
      }
    ]
  },
];

@Component({
  selector: 'section-three',
  template: `
      <h2 class="section-title">{{header.title}}</h2>
      <div class="section-content">
          <p-card *ngFor="let block of blocks" [class]="cardClass">
              <ng-template pTemplate="title">
                  <h5> {{block.title}}</h5>
              </ng-template>
              <ng-template pTemplate="subtitle">
                  {{block.description}}
              </ng-template>
              <div *ngFor="let link of block.content">
                  <a [href]="link.url"><i class="pi pi-link" aria-hidden="true"></i>{{link.title}}</a>
                  <div>{{link.description}}</div>
              </div>
          </p-card>
      </div>
  `
})

export class SectionThreeComponent implements OnInit {

  public cardClass = 'page-column';
  public header = sectionHeader;
  public blocks = blocks;

  constructor() {
  }

  ngOnInit() {
  }
}
