import { Component, Input, SimpleChanges } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-produtividade-detalhada',
  templateUrl: './produtividade-detalhada.component.html',
  styleUrl: './produtividade-detalhada.component.scss'
})
export class ProdutividadeDetalhadaComponent {
  @Input() mostrarTabela: boolean = false;
  
  
}
