export interface IHintDTO {
  message: string;
  level: 'INFO' | 'WARN' | 'ERROR';
}

export interface IBaseListDTO<T> {
  page: number;
  pageSize: number;
  continuation: boolean;
  hints: IHintDTO[];
  items: T[];
}

export class BaseListDTO<T> implements IBaseListDTO<T> {
  page = 1;

  pageSize = 5;

  continuation = true;

  hints: IHintDTO[] = [
    {
      message: 'this is list',
      level: 'INFO',
    },
  ];

  items: T[] = [];

  constructor(data?: T[]) {
    this.items = data || [];
  }
}
