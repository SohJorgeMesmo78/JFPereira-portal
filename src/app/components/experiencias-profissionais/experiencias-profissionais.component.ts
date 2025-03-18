import { Component } from '@angular/core';
import { IconeService } from '../../services/icone.service';

@Component({
  selector: 'app-experiencias-profissionais',
  templateUrl: './experiencias-profissionais.component.html',
  styleUrl: './experiencias-profissionais.component.scss'
})
export class ExperienciasProfissionaisComponent {
  experiencias = [
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

  constructor(private iconeService: IconeService){}
  
  obterEmpregoAtual(): any {
    return this.experiencias.find(exp => exp.dataFim === '');
  }

  getIcone(experiencia: any): string {
    return `assets/empresas/${this.iconeService.getIcone(experiencia.empresa, experiencia?.icone)}.png`;
  }

}
