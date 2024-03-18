import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  mostrarTabela: boolean = false;

  // Método para lidar com a mudança do status da tabela
  onMostrarTabelaChanged(event: boolean) {
    this.mostrarTabela = event;
  }
  
}
