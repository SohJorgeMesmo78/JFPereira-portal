import { Injectable } from '@angular/core';
import { IExperiencia } from '../models/IExperiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private experiencias: IExperiencia[] = [
    {
      empresa: 'Modal GR',
      cargo: 'Analista de Desenvolvimento Júnior',
      descricao: 'Desenvolvimento de aplicações FrontEnd em Angular e BackEnd em .Net.',
      dataInicio: '2022',
      dataFim: ''
    },
    {
      empresa: 'Modal GR',
      cargo: 'Estagiário em Analista de Sistemas',
      descricao: 'Desenvolvimento de aplicações em .Net.',
      dataInicio: '2021',
      dataFim: '2021'
    },
    {
      empresa: 'COHAB ST',
      cargo: 'Estagiário em T.I.',
      descricao: 'Atendimento HelpDesk para usuários da empresa, participando das rotinas de suporte técnico e auxiliando na gestão de manutenção preventiva das máquinas em operação.',
      dataInicio: '2018',
      dataFim: '2020'
    },
  ];

  constructor() { }

  getExperiencias(): IExperiencia[] {
    return this.experiencias;
  }

  obterEmpregoAtual() {
    var empregoAtual = this.experiencias.find(exp => exp.dataFim === '');

    return empregoAtual ? empregoAtual.cargo : 'Procurando por emprego';
  }
}
