import {Component, OnInit} from '@angular/core';
import {IBlock, IHeader, ILink} from '../common';


const sectionHeader: IHeader = {
  title: 'Политические организации',
  description: `
  Политические организации, имеющие в своих главных концепциях принципы самоуправления обществом(государством)
  посредством прямой демократии.
  `,
};


/**
 * Движение за Прямую Демократию
 */
const block1: IBlock<ILink[]> = {
  title: 'Движение за Прямую Демократию',
  description: `
Сообщество неравнодушных к судьбе своего государства граждан,
объеденившихся вокруг цели внедрения принципов самоуправления и народовластия, как в упраление
государством в целом, так и активного участия граждан в самоуправлении на местах.
Таких как местные администрации, товарищества собственников жилья(ТСЖ) и т.п.
`,
  content: [
    {
      title: 'Движение за прямую демократию - Я/Мы гражданин.',
      url: 'https://vk.com/ppd.komi',
      description: 'Группа с социальной сети "ВКонтакте"'
    },
    {
      title: 'Телеграмм-чат "Территория свободы"',
      url: 'https://t.me/terrtitory_of_freedom',
      description: 'Публичный чат сообщества в мессенджере "Телеграмм"'
    },
    {
      title: 'Телеграм-канал',
      url: 'https://t.me/pramayademokratia',
      description: ''
    },
    {
      title: 'ТикТок',
      url: 'https://www.tiktok.com/@pryamayademocratia',
      description: 'Группа в социальной сети "ТикТок"'
    }
  ]
};


/**
 * Движение Прямая Демократия / Party of Pure Democracy
 */

const block2: IBlock<ILink[]> = {
  title: 'Движение Прямая Демократия / Party of Pure Democracy',
  description: `
Цель собравшихся здесь — построение правового государства, создание гражданского общества, развитие демократии и самоуправления.
Наш инструмент — прямая демократия, когда активные граждане совместно обсуждают, принимают и исполняют важные решения, а также несут ответственность за них на любом этапе, подлинное народовластие.
Мы придерживаемся таких принципов в группе, и мы стремимся к внедрению такой формы управления на всех уровнях власти.
      `,
  content: [
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/groups/313687725397308/',
      description: 'Наше Движение за непосредственную власть народа. '
    },
  ]
};

const blocks: IBlock<ILink[]>[] = [
  block1,
  block2
];


@Component({
  selector: 'section-one',
  template: `
      <h2 class="section-title">{{header.title}}</h2>
      <div class="section-description">{{header.description}}</div>
      <div class="section-content">

          <p-card *ngFor="let block of blocks" [class]="cardClass">
              <ng-template pTemplate="title">
                  <h5 class="title-content"> {{block.title}}</h5>
              </ng-template>
              <ng-template pTemplate="subtitle">
                  {{block.description}}
              </ng-template>
              <h5>Движение в интернете:</h5>
              <div class="block-links">
                  <div *ngFor="let link of block.content" class="block-link-wrapper">
                      <a [href]="link.url" class="block-link"><i class="pi pi-link" aria-hidden="true"></i>{{link.title}}</a>
                      <div class="block-link-description p-card-subtitle">{{link.description}}</div>
                  </div>
              </div>
          </p-card>
      </div>
  `
})

export class SectionOneComponent implements OnInit {

  public cardClass = 'page-column';
  public header = sectionHeader;
  public blocks = blocks;

  constructor() {
  }

  ngOnInit() {
  }
}
