import { Component } from '@angular/core';
import { IconeService } from '../../services/icone.service';

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


  constructor(private iconeService: IconeService) {}

  getIcone(habilidade: any): string {
    return `assets/icons/${this.iconeService.getIcone(habilidade.nome, habilidade?.icone)}.svg`;
  }
}
