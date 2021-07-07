import {Component, OnInit} from '@angular/core';
import {IBlock, IHeader, ILink} from '../common';

const sectionHeader: IHeader = {
  title: 'Социальные сети',
  description: `
  Группы и сообщества в социальных сетях, имеющие в своих главных концепциях принципы самоуправления
  обществом(государством) посредством прямой демократии.
  `,
};

const blocks: IBlock<ILink[]>[] = [
  {
    title: 'ВКонтакте',
    description: '',
    content: [
      {
        title: 'Прямая демократия в России',
        url: 'https://vk.com/public137033037',
        description: 'Сообщество российский приверженцов Прямой демократии'
      },
      {
        title: 'Проект 13',
        url: 'https://vk.com/public45436767',
        description: 'Обсуждение проблем и перспектив Прямой демократии'
      },
      {
        title: 'Прямая демократия. Электронная демократия.',
        url: 'https://vk.com/priam_dem',
        description: 'Группа для объединения сторонников и продвижения прямой демократии.'
      },
      {
        title: 'Круглый стол прямой демократии',
        url: 'https://vk.com/club42349963',
        description: 'Целью движения является развитие теории Прямой Демократии.'
      }
    ]
  },
];


@Component({
  selector: 'section-two',
  template: `
      <h2 class="section-title">{{header.title}}</h2>
      <div class="section-description">{{header.description}}</div>
      <div class="section-content">
          <p-card *ngFor="let block of blocks" [class]="cardClass">
              <ng-template pTemplate="title">
                  <h5>{{block.title}}</h5>
              </ng-template>
              <div *ngFor="let link of block.content">
                  <a [href]="link.url"><i class="pi pi-link" aria-hidden="true"></i>{{link.title}}</a>
                  <div>{{link.description}}</div>
              </div>
              <ng-template pTemplate="footer">

              </ng-template>
          </p-card>
      </div>
  `
})

export class SectionTwoComponent implements OnInit {

  public cardClass = 'page-column';
  public header = sectionHeader;
  public blocks = blocks;

  constructor() {
  }

  ngOnInit() {
  }
}
