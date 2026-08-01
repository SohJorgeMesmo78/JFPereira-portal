import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProjetoService } from '../../services/projeto.service';
import { IProjeto } from '../../models/IProjeto';

type CarouselDirection = 'next' | 'prev';

@Component({
    selector: 'app-projetos',
    templateUrl: './projetos.component.html',
    styleUrls: ['./projetos.component.scss'],
    standalone: false
})
export class ProjetosComponent implements OnInit {
  projetos: readonly IProjeto[] = [];
  projetosVisiveis: IProjeto[] = [];
  itemInicial: number = 0;
  itemFinal: number = 0;
  totalItens: number = 0;
  indiceAtual = 0;
  itensPorPagina = 2;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private projetoService: ProjetoService, 
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.atualizarItensPorPagina();
    }
  }

  ngOnInit(): void {
    this.projetos = this.projetoService.getProjetos();
    if (isPlatformBrowser(this.platformId)) {
      this.atualizarItensPorPagina();
    } else {
      this.atualizarProjetosVisiveis();
    }
  }

  atualizarProjetosVisiveis(): void {
    const paginacao = this.projetoService.getProjetosPaginados(this.indiceAtual, this.itensPorPagina);
    this.projetosVisiveis = paginacao.data;
    this.itemInicial = paginacao.itemInicial;
    this.itemFinal = paginacao.itemFinal;
    this.totalItens = paginacao.totalItens;
  }

  mudarProjeto(direcao: CarouselDirection): void {
    const totalProjetos = this.projetos.length;
  
    if (direcao === 'next') {
      this.indiceAtual = (this.indiceAtual + 1) % totalProjetos;
    } else if (direcao === 'prev') {
      this.indiceAtual = (this.indiceAtual - 1 + totalProjetos) % totalProjetos;
    }
  
    this.atualizarProjetosVisiveis();
  }

  trackByProjeto(_: number, projeto: IProjeto): string {
    return projeto.nome;
  }

  private atualizarItensPorPagina(): void {
    const novosItensPorPagina = window.innerWidth <= 768 ? 1 : 2;
    if (this.itensPorPagina !== novosItensPorPagina) {
      this.itensPorPagina = novosItensPorPagina;
    }
    this.atualizarProjetosVisiveis();
  }

  get showNavButtons(): boolean {
    return this.projetos.length > 1;
  }

  get projetosIntervalo(): string {
    if (this.itemFinal < this.itemInicial) {
      return `${this.itemInicial} e ${this.itemFinal} de ${this.totalItens}`;
    }
    if (this.itensPorPagina !== 1) {
      return `${this.itemInicial} - ${this.itemFinal} de ${this.totalItens}`;
    }
    return `${this.itemInicial} de ${this.totalItens}`;
  }

}
