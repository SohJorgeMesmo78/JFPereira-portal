import { Injectable } from '@angular/core';
import { IProjeto } from '../models/IProjeto';
import { IPaginacao } from '../models/IPaginacao';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly projetos: IProjeto[] = [
    {
      nome: 'JFPereira Portfolio',
      descricao: 'Portfólio pessoal desenvolvido para apresentar minha trajetória, competências e projetos com suporte a SSR.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'SSR'],
      github: 'https://github.com/SohJorgeMesmo78/JFPereira-portal',
      site: 'https://jfpereira.seteoito.dev/',
      imagem: 'assets/projetos/jfpereira-portfolio.png'
    },
    {
      nome: 'PokeTeam',
      descricao: 'Aplicação para explorar informações de Pokémon e organizar equipes, com frontend e API próprios.',
      tecnologias: ['Angular', '.NET', 'REST API'],
      github: 'https://github.com/SohJorgeMesmo78/PokeTeam-portal',
      site: 'https://poketeam.seteoito.dev/',
      backend: 'https://github.com/SohJorgeMesmo78/PokeTeam-api',
      backendSite: 'https://poketeam-api.seteoito.dev/',
      imagem: 'assets/projetos/poketeam.png'
    },
    {
      nome: 'Jogos "Fala por de Trás"',
      descricao: 'Experiência web inspirada em jogos de adivinhação, projetada para partidas rápidas em grupo.',
      tecnologias: ['Angular', 'TypeScript', 'CSS'],
      github: 'https://github.com/SohJorgeMesmo78/FalaPorDeTras',
      site: 'https://fala-por-de-tras-ten.vercel.app/',
      imagem: 'assets/projetos/falapordetras.png'
    },
    {
      nome: 'Soroban',
      descricao: 'Aplicação web educacional voltada à prática e visualização de operações com soroban.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/SohJorgeMesmo78/Soroban',
      site: 'https://soroban-dun.vercel.app/',
      imagem: 'assets/projetos/soroban.png'
    }
  ];

  constructor() { }

  getProjetosPaginados(indiceAtual: number, itensPorPagina: number): IPaginacao<IProjeto> {
    const totalProjetos = this.projetos.length;
    if (totalProjetos === 0 || itensPorPagina <= 0) {
      return { data: [], itemInicial: 0, itemFinal: 0, totalItens: totalProjetos };
    }

    const start = ((indiceAtual % totalProjetos) + totalProjetos) % totalProjetos;
    const quantidade = Math.min(itensPorPagina, totalProjetos);
    const projetosVisiveis = Array.from(
      { length: quantidade },
      (_, offset) => this.projetos[(start + offset) % totalProjetos]
    );

    return {
      data: projetosVisiveis,
      itemInicial: start + 1,
      itemFinal: ((start + quantidade - 1) % totalProjetos) + 1,
      totalItens: totalProjetos
    };
  }

  getProjetos(): readonly IProjeto[] {
    return this.projetos;
  }
}
