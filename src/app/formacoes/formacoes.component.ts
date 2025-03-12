import { Component } from '@angular/core';
import { IconeService } from '../services/icone.service';

@Component({
  selector: 'app-formacoes',
  templateUrl: './formacoes.component.html',
  styleUrls: ['./formacoes.component.scss']
})
export class FormacoesComponent {
  
  formacoes = [
    {
      nome: 'UNIVERSIDADE CATÓLICA DE SANTOS (UNISANTOS)',
      dataInicio: '2020',
      dataFim: '2023',
      tipoFormacao: 'BACHARELADO EM SISTEMAS DE INFORMAÇÃO'
    },
    {
      nome: 'INSTITUTO FEDERAL SÃO PAULO (IFSP) - CAMPUS CUBATÃO',
      dataInicio: '2015',
      dataFim: '2019',
      tipoFormacao: 'ENSINO TÉCNICO INTEGRADO AO ENSINO MÉDIO'
    }
  ];

  constructor(private iconeService: IconeService){}

  getIcone(item: any): string {
    return `assets/formacoes/${this.iconeService.getIcone(item.nome, item?.icone)}.png`;
  }
}
