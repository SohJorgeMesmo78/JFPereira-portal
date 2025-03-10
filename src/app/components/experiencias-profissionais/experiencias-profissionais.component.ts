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
      empresa: 'ModalGr',
      cargo: 'Desenvolvedor FullStack',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis condimentum urna in luctus. Suspendisse tincidunt egestas facilisis. Suspendisse a eleifend ipsum. In vel nunc interdum, pulvinar arcu eu, iaculis justo.',
      dataInicio: '11/2021',
      dataFim: 'Emprego Atual'
    },
    {
      empresa: 'Cohab Santista',
      cargo: 'Engenheiro de Software',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis condimentum urna in luctus. Suspendisse tincidunt egestas facilisis. Suspendisse a eleifend ipsum. In vel nunc interdum, pulvinar arcu eu, iaculis justo.',
      dataInicio: '05/2018',
      dataFim: '10/2021'
    },
  ];

  constructor(private iconeService: IconeService){}
  

  getIcone(experiencia: any): string {
    return `assets/empresas/${this.iconeService.getIcone(experiencia.empresa, experiencia?.icone)}.png`;
  }

}
