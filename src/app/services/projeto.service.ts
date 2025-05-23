import { Injectable } from '@angular/core';
import { IProjeto } from '../models/IProjeto';
import { IPaginacao } from '../models/IPaginacao';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private projetos: IProjeto[] = [
    {
      nome: 'JFPereira Portfolio',
      github: 'https://github.com/SohJorgeMesmo78/JFPereira-portal',
      site: 'https://jf-pereira.vercel.app/'
    },
    {
      nome: 'InfoPoke78',
      github: 'https://github.com/SohJorgeMesmo78/InfoPoke78',
      site: 'https://info-poke78.vercel.app/',
      backend: 'https://github.com/SohJorgeMesmo78/InfoPoke78-API',
      backendSite: 'https://infopoke78-api.onrender.com/'
    }
  ];

  constructor() { }

  getProjetosPaginados(indiceAtual: number, itensPorPagina: number): IPaginacao<IProjeto> {
    const totalProjetos = this.projetos.length;

    const start = indiceAtual;
    const end = start + itensPorPagina;

    let projetosVisiveis = this.projetos;

    if(totalProjetos >= itensPorPagina){
      projetosVisiveis = this.projetos.slice(start, end);
    }

    let itemInicial = start + 1;
    let itemFinal = end;

    if (projetosVisiveis.length < itensPorPagina && totalProjetos >= itensPorPagina) {
      itemFinal = itensPorPagina - projetosVisiveis.length;
      projetosVisiveis.push(...this.projetos.slice(0, (itensPorPagina - projetosVisiveis.length)));
    }


    return {
      data: projetosVisiveis,
      itemInicial: itemInicial,
      itemFinal: itemFinal,
      totalItens: totalProjetos
    };
  }

  getProjetos(): IProjeto[] {
    return this.projetos;
  }
}
