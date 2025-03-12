import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  projetos = [
    {
      nome: 'Projeto 1',
      imagem: 'assets/images/projeto1.jpg',
      github: 'https://github.com/seuprojeto1',
      site: 'https://seuprojeto1.com'
    },
    {
      nome: 'Projeto 2',
      imagem: 'assets/images/projeto2.jpg',
      github: 'https://github.com/seuprojeto2',
      site: 'https://seuprojeto2.com'
    },
    {
      nome: 'Projeto 3',
      imagem: 'assets/images/projeto3.jpg',
      github: 'https://github.com/seuprojeto3',
      site: 'https://seuprojeto3.com'
    },
    {
      nome: 'Projeto 4',
      imagem: 'assets/images/projeto4.jpg',
      github: 'https://github.com/seuprojeto4',
      site: 'https://seuprojeto4.com'
    },
  ];

  projetosVisiveis = [this.projetos[0], this.projetos[1]];
  indiceAtual = 0;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isMobile = window.innerWidth <= 768;
    this.atualizarProjetosVisiveis();
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 768;
    this.atualizarProjetosVisiveis();
  }

  atualizarProjetosVisiveis(): void {
    if (this.isMobile) {
      this.projetosVisiveis = [this.projetos[this.indiceAtual]];
    } else {
      this.projetosVisiveis = [
        this.projetos[this.indiceAtual],
        this.projetos[(this.indiceAtual + 1) % this.projetos.length]
      ]; // Mostra 2 projetos de cada vez
    }
  }

  mudarProjeto(direcao: string): void {
    if (direcao === 'next') {
      this.indiceAtual = (this.indiceAtual + 1) % this.projetos.length;
    } else if (direcao === 'prev') {
      this.indiceAtual = (this.indiceAtual - 1 + this.projetos.length) % this.projetos.length;
    }

    this.atualizarProjetosVisiveis();
  }
}
