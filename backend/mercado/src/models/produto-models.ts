export class Produto {
  id: number;
  item: string;
  preco: number;

  constructor(id: number, item: string, preco: number) {
    this.id = id;
    this.item = item;
    this.preco = preco;
  }
}
