import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  
  constructor(){}

  dadosTrimestrais: any[] = [
    {
      anoMes:'202401',
      horasTrabalhadas: 160,
      diasTrabalhados: 22,
      diasFolga: 10,
      trimestre:1,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 2000,
          documentosEnviados: 900,
          trimestre: 1,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 800,
          documentosEnviados: 700,
          trimestre: 1,
          metrica: 'Documentos Processados',
          resultado: 87.5
        }
      ]
    },  {
      anoMes:'202404',
      horasTrabalhadas: 160,
      diasTrabalhados: 20,
      diasFolga: 10,
      trimestre:2,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 3000,
          documentosEnviados: 900,
          trimestre: 2,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 800,
          documentosEnviados: 700,
          trimestre: 2,
          metrica: 'Documentos Processados',
          resultado: 87.5
        }
      ]
    },   {
      anoMes:'202407',
      horasTrabalhadas: 160,
      diasTrabalhados: 20,
      diasFolga: 10,
      trimestre:3,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 5000,
          documentosEnviados: 900,
          trimestre:3,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 800,
          documentosEnviados: 700,
          trimestre: 3,
          metrica: 'Documentos Processados',
          resultado: 87.5
        }
      ]
    },
    {
      anoMes:'202410',
      horasTrabalhadas: 160,
      diasTrabalhados: 22,
      diasFolga: 10,
      trimestre:4,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 2000,
          documentosEnviados: 900,
          trimestre: 4,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 800,
          documentosEnviados: 700,
          trimestre: 4,
          metrica: 'Documentos Processados',
          resultado: 87.5
        }
      ]
    }
  ];

  dadosMensais: any[] = [
    {
      anoMes:'202401',
      horasTrabalhadas: 16,
      diasTrabalhados: 2,
      diasFolga: 1,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 200,
          documentosEnviados: 90,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 80,
          documentosEnviados: 70,
          metrica: 'Documentos Processados',
          resultado: 87.5
        }
      ]
    },  {
      anoMes:'202404',
      horasTrabalhadas: 16,
      diasTrabalhados: 2,
      diasFolga: 1,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 300,
          documentosEnviados: 90,
          metrica: 'Documentos Processados',
          resultado: 9
        },
        {
          nome: 'SEI',
          documentosAssinados: 80,
          documentosEnviados: 70,
          metrica: 'Documentos Processados',
          resultado: 87
        }
      ]
    },   {
      anoMes:'202407',
      horasTrabalhadas: 16,
      diasTrabalhados: 2,
      diasFolga: 1,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 500,
          documentosEnviados: 90,
          metrica: 'Documentos Processados',
          resultado: 92
        },
        {
          nome: 'SEI',
          documentosAssinados: 80,
          documentosEnviados: 70,
          metrica: 'Documentos Processados',
          resultado: 82
        }
      ]
    },
    {
      anoMes:'202410',
      horasTrabalhadas: 10,
      diasTrabalhados: 2,
      diasFolga: 1,
      sistemas: [
        {
          nome: 'PJE',
          documentosAssinados: 2200,
          documentosEnviados: 92,
          metrica: 'Documentos Processados',
          resultado: 90
        },
        {
          nome: 'SEI',
          documentosAssinados: 80,
          documentosEnviados: 720,
          metrica: 'Documentos Processados',
          resultado: 81.5
        }
      ]
    }
  ];
  
}
