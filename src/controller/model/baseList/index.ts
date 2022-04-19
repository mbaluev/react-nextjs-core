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
  page: number = 1;
  pageSize: number = 5;
  continuation: boolean = true;
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
