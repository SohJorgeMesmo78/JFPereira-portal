export interface IPaginacao<T> {
  data: T[];
  itemInicial: number;
  itemFinal: number;
  totalItens: number;
}
