import { Component, EventEmitter, Output } from '@angular/core';
import { Mes, Meses } from '../meses';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-produtividade-show',
  templateUrl: './produtividade-show.component.html',
  styleUrl: './produtividade-show.component.scss'
})
export class ProdutividadeShowComponent {
  @Output() mostrarTabelaChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  dadosDoTrimestre: any[] = [];
trimestreSelecionado: number | null = null
mesSelecionado: String = ''
dadosDoMes: any[] = [];

  meses: Mes[][] = Meses;

  constructor(private dadosService: DadosService) {}

  selecionarMes(mes: any) {
    // Aqui você pode adicionar a lógica para lidar com a seleção do mês
    console.log("Mês selecionado:", mes);
  }
  
  exibirDadosMes(anoMes: String) {
    this.mesSelecionado = anoMes;
    this.dadosDoMes = this.dadosService.dadosMensais.filter(item => item.anoMes === anoMes);
    console.log("Mês selecionado:", this.mesSelecionado, this.dadosDoMes);
    
  }

  exibirDadosTrimestre(trimestre: number) {
    if (this.trimestreSelecionado === trimestre) {
      this.trimestreSelecionado = null;
      this.mesSelecionado = ''; // Limpa o mês selecionado
      this.dadosDoTrimestre = [];
    } else {
      this.trimestreSelecionado = trimestre;
      this.mesSelecionado = ''; // Limpa o mês selecionado
      this.dadosDoTrimestre = this.dadosService.dadosTrimestrais.filter(item => item.trimestre === trimestre);
      console.log(this.dadosDoTrimestre, "trimestre ", this.trimestreSelecionado);
    }
  }
}

