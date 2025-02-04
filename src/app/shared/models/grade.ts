import { CodigoGradeEnum } from './codigoGradeEnum';

export interface Grade {
  codigo: CodigoGradeEnum;
  status: string;
  dataHora: string;
}
