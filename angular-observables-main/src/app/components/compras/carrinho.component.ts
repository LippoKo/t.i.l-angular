import { Component, OnDestroy, inject } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  template: `
    <span>Quantidade Carrinho:</span>
    <span> {{ quantidadeProdutos }} </span>
  `,
})
export class CarrinhoComponent implements OnDestroy {
  carrinhoService = inject(CarrinhoService);

  quantidadeNoCarrinho$ = this.carrinhoService.obterQuantidadeCarrinho();

  quantidadeProdutos = 0;
  sub = new Subscription();

  constructor() {
    const subContador = this.quantidadeNoCarrinho$.subscribe((quantidade) => {
      console.log('Valor Emitido', quantidade);

      this.quantidadeProdutos = quantidade;
    });

    this.sub.add(subContador);
  }

  ngOnDestroy(): void {
    console.log('Component Destruido!');
    this.sub.unsubscribe();
  }
}
