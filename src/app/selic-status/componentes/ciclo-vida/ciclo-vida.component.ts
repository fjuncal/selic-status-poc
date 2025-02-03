import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss'],
})
export class CicloVidaComponent implements OnInit {
  statusOrder = [
    'Offline - Pré-Abertura',
    'Offline - Apto para Abertura',
    'Aberto sem Grade',
    'Online - Grade Completa',
    'Online - Grade SPI',
    'Online - Grade sem STR',
    'Offline - Sem Mercado',
    'Offline - Apto para Conciliação',
    'Offline - Conciliação',
    'Offline - Apto para Pré Abertura', // 🔥 Último passo
  ];
  // 🔥 Lista ordenada dos status

  currentStatus: string = ''; // 🔥 Status atual vindo da API
  stepsHistory: string[] = []; // 🔥 Histórico do caminho percorrido
  lastStatusWasFinal: boolean = false; // 🔥 Variável para controlar quando apagar o histórico

  constructor() {}

  ngOnInit() {
    // 🔥 Simulação de chamada da API (substitua por fetch real)
    setTimeout(() => this.getStepClass('Online - Grade sem STR'), 1000);
    this.currentStatus = 'Offline - Conciliação';
  }

  // 🔥 Método que retorna a classe do step dinamicamente
  getStepClass(step: string): string {
    if (this.currentStatus === step) {
      return 'step current'; // Status atual (azul)
    }
    return 'step'; // Nenhuma classe adicional
  }
}
