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
    { nome: '.NET', icone: 'dotnet' },
    { nome: 'JavaScript'},
    { nome: 'TypeScript'}
  ];

  getIcone(habilidade: any): string {
    return habilidade.icone 
      ? `assets/icons/${habilidade.icone.toLowerCase()}.svg` 
      : `assets/icons/${habilidade.nome.toLowerCase()}.svg`;
  }
}
