import { Component } from '@angular/core';
import { IconeService } from '../../services/icone.service';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrl: './habilidades-tecnicas.component.scss'
})
export class HabilidadesTecnicasComponent {
  habilidades = [
    { nome: 'HTML', icone: 'devicon-html5-plain' },
    { nome: 'CSS', icone: 'devicon-css3-plain' },
    { nome: 'SASS', icone: 'devicon-sass-original' },
    { nome: 'SCSS', icone: 'devicon-sass-original' },
    { nome: 'Angular', icone: 'devicon-angularjs-plain' },
    { nome: '.NET', icone: 'devicon-dotnetcore-plain' },
    { nome: 'JavaScript', icone: 'devicon-javascript-plain' },
    { nome: 'TypeScript', icone: 'devicon-typescript-plain' },
    { nome: 'Node.js', icone: 'devicon-nodejs-plain' },
    { nome: 'MySQL', icone: 'devicon-mysql-plain' },
    { nome: 'Git', icone: 'devicon-git-plain' },
    { nome: 'GitHub', icone: 'devicon-github-original' },
  ];
  


  constructor(private iconeService: IconeService) {}

  getIcone(habilidade: any): string {
    return `assets/icons/${this.iconeService.getIcone(habilidade.nome, habilidade?.icone)}.svg`;
  }
}
