import { Component, EventEmitter, Output } from '@angular/core';
import { Mes, Meses } from '../meses';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-produtividade-show',
  templateUrl: './produtividade-show.component.html',
  styleUrl: './produtividade-show.component.scss'
})
export class ProdutividadeShowComponent {
 


  meses: Mes[][] = Meses;

  constructor(private dadosService: DadosService) {}

  valorSelecionado?: number | undefined;
  titulo: string = '';
  metodoSelecionado: boolean = false;

  selecionarValor(valor: number) {
    this.valorSelecionado = valor;
    this.atualizarTitulo(valor);
    this.metodoSelecionado = true;
  }
  
  selecionarValorDiferente(valor: number) {
    this.valorSelecionado = valor;
    this.atualizarTitulo(valor);
    this.metodoSelecionado = false;
  }

  atualizarTitulo(valor: number) {
    if (valor <= 4) {
      this.titulo = 'Título para valores de 1 a 4';
    } else {
      this.titulo = 'Título para valores maiores que 4';
    }
  }
}

