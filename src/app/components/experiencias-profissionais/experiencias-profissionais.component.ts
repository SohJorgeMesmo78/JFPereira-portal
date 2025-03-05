import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias-profissionais',
  templateUrl: './experiencias-profissionais.component.html',
  styleUrl: './experiencias-profissionais.component.scss'
})
export class ExperienciasProfissionaisComponent {
  experiencias = [
    {
      empresa: 'ModalGr',
      logo: 'assets/empresas/ModalGr.png',
      cargo: 'Desenvolvedor FullStack',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis condimentum urna in luctus. Suspendisse tincidunt egestas facilisis. Suspendisse a eleifend ipsum. In vel nunc interdum, pulvinar arcu eu, iaculis justo.',
      dataInicio: '11/2021',
      dataFim: 'Emprego Atual'
    },
    {
      empresa: 'Cohab Santista',
      logo: 'assets/empresas/CohabSantista.png',
      cargo: 'Engenheiro de Software',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis condimentum urna in luctus. Suspendisse tincidunt egestas facilisis. Suspendisse a eleifend ipsum. In vel nunc interdum, pulvinar arcu eu, iaculis justo.',
      dataInicio: '05/2018',
      dataFim: '10/2021'
    }
  ];
  
}
