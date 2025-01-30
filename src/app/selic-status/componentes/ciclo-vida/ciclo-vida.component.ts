import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss'],
})
export class CicloVidaComponent implements OnInit {
  // 🔥 Lista ordenada dos status
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
    'Offline - Apto para Pré Abertura',
  ];

  currentStatus: string = ''; // 🔥 Status atual vindo da API
  stepsHistory: string[] = []; // 🔥 Histórico do caminho percorrido

  constructor() {}

  ngOnInit() {
    // 🔥 Simulação de chamada da API (substitua por fetch real)
    setTimeout(() => this.updateStepsFromAPI('Online - Grade sem STR'), 1000);
  }

  updateStepsFromAPI(apiResponse: string) {
    this.currentStatus = apiResponse;

    // 🔥 Descobre o índice do status atual
    const index = this.statusOrder.indexOf(this.currentStatus);

    // 🔥 Define o caminho percorrido até o status atual
    this.stepsHistory = this.statusOrder.slice(0, index + 1);

    // 🔥 Garante que "Online - Grade Completa" ou "Aberto sem STR" sejam usados corretamente
    if (this.stepsHistory.includes('Online - Grade sem STR')) {
      this.stepsHistory = this.stepsHistory.filter(
        (step) => step !== 'Online - Grade Completa'
      );
    } else if (this.stepsHistory.includes('Online - Grade Completa')) {
      this.stepsHistory = this.stepsHistory.filter(
        (step) => step !== 'Online - Grade sem STR'
      );
    }
  }

  // 🔥 Método que retorna a classe do step dinamicamente
  getStepClass(step: string): string {
    if (this.currentStatus === step) {
      return 'step current'; // 🔥 Status atual (azul)
    }
    if (this.stepsHistory.includes(step)) {
      return 'step done'; // 🔥 Passou por esse step (verde)
    }
    if (
      (step === 'Online - Grade Completa' ||
        step === 'Online - Grade sem STR') &&
      !this.stepsHistory.includes(step)
    ) {
      return 'step ignored'; // 🔥 O step alternativo não foi usado (cinza escuro)
    }
    return 'step'; // Nenhuma classe adicional
  }
}
