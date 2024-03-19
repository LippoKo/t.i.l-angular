import { Injectable } from '@angular/core';
import { Compra } from './compras.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Compra[] = [];

  private produtoAdicionado$ = new BehaviorSubject<number>(0);

  obterQuantidadeCarrinho() {
    return this.produtoAdicionado$.asObservable();
  }

  // retornaQuantidadeCarrinho() {
  //   return this.carrinho.length;
  // }

  adicionarProduto(produto: string) {
    const produtoCompra: Compra = {
      produto: produto,
      id: this.carrinho.length + 1,
    };

    this.carrinho.push(produtoCompra);
    this.produtoAdicionado$.next(this.carrinho.length);

    console.log(this.carrinho);
  }
}
