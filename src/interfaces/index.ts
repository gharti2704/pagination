export interface IPhoto {
  id: string;
  title: string;
  url?: string;
  thumbnailUrl?: string;
}

export interface ITodo {
  id: string;
  title: string;
  completed?: boolean;
}

export type Next = {
  page: number;
  limit: number;
};

export type Prev = {
  page: number;
  limit: number;
};

export interface IData {
  data: IPhoto[] | ITodo[];
  next: Next;
  prev: Prev;
}
