import {Injectable, InjectionToken} from '@angular/core';
import {main_section_1} from '../content/main-section-1';

const content = {
  main_section_1: main_section_1
}

export const DATA_SERVICE = new InjectionToken<DataServiceInterface>('DATA_SERVICE');


export interface DataServiceInterface {
  get(...path: string[]);
}

@Injectable()
export class DataService implements DataServiceInterface {

  constructor() {
  }

  get(...path: string[]) {
    return content[this.createContentId(path)];
  }

  createContentId(path: string[]) {
    return path.join('_');
  }
}
