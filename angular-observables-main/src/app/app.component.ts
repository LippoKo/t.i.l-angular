import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { CarrinhoComponent } from './components/compras/carrinho.component';
import { CarrinhoService } from './components/compras/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CarrinhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-observables';
  inputProduto = '';
  private carrinhoService = inject(CarrinhoService);

  mostrarContador = true;

  // private timer = new Promise<string>((resolve, reject) => {
  //   console.log('Promise Started!');

  //   setTimeout(() => {
  //     resolve('PROMISE RESOLVED!');
  //   }, 5000);
  // });

  private timer$ = new Observable<string>((subscriber) => {
    console.log('observable init');
    setTimeout(() => {
      subscriber.next('Observable Resolved!');
    }, 5000);
  });

  ngOnInit(): void {
    // this.timer.then((value) => console.log(value));
    this.timer$.subscribe((value) => console.log(value));
  }

  adicionarProduto() {
    // Add Produto
    this.carrinhoService.adicionarProduto(this.inputProduto);

    // limpar
    this.inputProduto = '';
  }
}
