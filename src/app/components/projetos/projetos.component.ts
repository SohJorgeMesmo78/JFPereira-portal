import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconeService } from '../../services/icone.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  projetos = [
    {
      nome: 'JFPereira Portfolio',
      github: 'https://github.com/SohJorgeMesmo78/JFPereira-portal',
      site: 'https://jf-pereira.vercel.app/'
    }
  ];

  projetosVisiveis = [this.projetos[0]];
  indiceAtual = 0;
  isMobile = false;

  constructor(private iconeService: IconeService, @Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.atualizarProjetosVisiveis();
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.atualizarProjetosVisiveis();
    }
  }

  atualizarProjetosVisiveis(): void {
    if (this.projetos.length === 1) {
      this.projetosVisiveis = [this.projetos[this.indiceAtual]];
    } else {
      if (this.isMobile) {
        this.projetosVisiveis = [this.projetos[this.indiceAtual]];
      } else {
        this.projetosVisiveis = [
          this.projetos[this.indiceAtual],
          this.projetos[(this.indiceAtual + 1) % this.projetos.length]
        ];
      }
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

  getIcone(item: any): string {
    return `assets/projetos/${this.iconeService.getIcone(item.nome, item?.icone)}.png`;
  }

  get showNavButtons(): boolean {
    return this.projetos.length > 1;
  }

  get projetosIntervalo(): string {
    const total = this.projetos.length;
    const start = this.indiceAtual + 1;
    const end = (total === start) ? 1 : Math.min(this.indiceAtual + this.projetosVisiveis.length, total);
    if(this.isMobile){
      return `${start} de ${total}`;
    }
    else{
      return `${start}, ${end} de ${total}`;
    }
  }

  openSite(siteUrl: string): void {
    window.open(siteUrl, '_blank');
  }
}
