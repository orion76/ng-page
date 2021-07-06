
export interface IHeader {
  title: string;
  description?: string;
}



export interface ISection<T> {
  title: string;
  description: string;
  content: IBlock<T>[];
}

export interface IBlock<T> {
  title: string;

  description: string;
  content: T;
}


export interface ILinks {
  title: string;
  description?: string;
  links: ILink[];
}


export interface ILink {
  title: string;
  url: string;
  description?: string;
}


