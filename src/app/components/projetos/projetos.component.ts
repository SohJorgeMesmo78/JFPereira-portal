import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconeService } from '../../services/icone.service';
import { ProjetoService } from '../../services/projeto.service';
import { IProjeto } from '../../models/iprojeto';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  projetos: IProjeto[] = [];
  projetosVisiveis: IProjeto[] = [];
  itemInicial: number = 0;
  itemFinal: number = 0;
  totalItens: number = 0;
  indiceAtual = 0;
  itensPorPagina = 2;
  isMobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private iconeService: IconeService, 
    private projetoService: ProjetoService, 
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.atualizarProjetosVisiveis();
    }
  }

  ngOnInit() {
    this.projetos = this.projetoService.getProjetos();
    this.atualizarProjetosVisiveis();
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  atualizarProjetosVisiveis(): void {
    const paginacao = this.projetoService.getProjetosPaginados(this.indiceAtual, this.itensPorPagina);
    this.projetosVisiveis = paginacao.data;
    this.itemInicial = paginacao.itemInicial;
    this.itemFinal = paginacao.itemFinal;
    this.totalItens = paginacao.totalItens;
  }

  mudarProjeto(direcao: string): void {
    const totalProjetos = this.projetos.length;
  
    if (direcao === 'next') {
      this.indiceAtual = (this.indiceAtual + 1) % totalProjetos;
    } else if (direcao === 'prev') {
      this.indiceAtual = (this.indiceAtual - 1 + totalProjetos) % totalProjetos;
    }
  
    this.atualizarProjetosVisiveis();
  }
  

  getIcone(item: IProjeto): string {
    return `assets/projetos/${this.iconeService.getIcone(item.nome, item?.icone)}.png`;
  }

  get showNavButtons(): boolean {
    return this.projetos.length > 1;
  }

  get projetosIntervalo(): string {
    if(this.itensPorPagina != 1){
      return `${this.itemInicial} - ${this.itemFinal} de ${this.totalItens}`;
    }
    return `${this.itemInicial} de ${this.totalItens}`;
  }

  openSite(siteUrl: string): void {
    window.open(siteUrl, '_blank');
  }
}
