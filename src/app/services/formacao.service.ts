import { Injectable } from '@angular/core';
import { IFormacao } from '../models/IFormacao';

@Injectable({
  providedIn: 'root'
})
export class FormacaoService {
  private readonly formacoes: IFormacao[] = [
    {
      nome: 'UNIVERSIDADE CATÓLICA DE SANTOS (UNISANTOS)',
      dataInicio: '2020',
      dataFim: '2023',
      tipoFormacao: 'Bacharelado em sistemas de informação',
      descricao: ''
    },
    {
      nome: 'INSTITUTO FEDERAL SÃO PAULO (IFSP) - CAMPUS CUBATÃO',
      dataInicio: '2015',
      dataFim: '2019',
      tipoFormacao: 'Ensino técnico integrado ao ensino médio',
      descricao: ''
    }
  ];

  constructor() { }

  getFormacoes(): readonly IFormacao[] {
    return this.formacoes;
  }

  obterFormacao(): string {
    const formacaoAtual = this.formacoes.find((formacao) => formacao.dataFim === '');

    if (formacaoAtual) {
      return `${formacaoAtual.tipoFormacao}, em andamento`;
    }

    const formacaoMaisRecente = this.formacoes.reduce((maisRecente, formacao) =>
      formacao.dataFim > maisRecente.dataFim ? formacao : maisRecente
    );

    return `${formacaoMaisRecente.tipoFormacao}, concluído`;
  }
}
