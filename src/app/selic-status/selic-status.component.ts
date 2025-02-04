import { Component, OnInit } from '@angular/core';
import { Grade } from '../shared/models/grade';
import { CodigoGradeEnum } from '../shared/models/codigoGradeEnum';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selic-status',
  templateUrl: './selic-status.component.html',
  styleUrls: ['./selic-status.component.scss'],
})
export class SelicStatusComponent implements OnInit {
  grades: Grade[] = [];
  errorMessageGrade: string = '';
  codigos = [
    CodigoGradeEnum.SEL01,
    CodigoGradeEnum.SEL03,
    CodigoGradeEnum.SEL04,
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cria um array de observables para cada chamada de API
    this.grades = [
      {
        codigo: CodigoGradeEnum.SEL01,
        status: 'FECHADA',
        dataHora: '2025-01-30T17:26:49.476848',
      },
      {
        codigo: CodigoGradeEnum.SEL03,
        status: 'ABERTO',
        dataHora: '2025-01-30T17:30:00.000000',
      },
      {
        codigo: CodigoGradeEnum.SEL04,
        status: 'ABERTO',
        dataHora: '2025-01-30T17:35:00.000000',
      },
    ];
  }
}
