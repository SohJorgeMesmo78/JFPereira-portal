import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrl: './habilidades-tecnicas.component.scss'
})
export class HabilidadesTecnicasComponent {
  habilidades = [
    { nome: 'HTML'},
    { nome: 'CSS'},
    { nome: 'Angular'},
    { nome: '.NET', icone: 'DotNet' },
    { nome: 'JavaScript'},
    { nome: 'TypeScript'}
  ];

  getIcone(habilidade: any): string {
    // Verifica se a habilidade tem o campo 'icone', senão cria o caminho dinâmico
    return habilidade.icone 
      ? `assets/icons/${habilidade.icone}.svg` 
      : `assets/icons/${habilidade.nome}.svg`;
  }
}
