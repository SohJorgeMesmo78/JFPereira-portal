import { Injectable } from '@angular/core';
import { IProjeto } from '../models/iprojeto';
import { IPaginacao } from '../models/ipaginacao'; // Certifique-se de importar a interface

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
  ];

  constructor() { }

  getProjetosPaginados(indiceAtual: number, itensPorPagina: number): IPaginacao<IProjeto> {
    const totalProjetos = this.projetos.length;

    const start = indiceAtual;
    const end = start + itensPorPagina;

    let projetosVisiveis = this.projetos;

    console.log(totalProjetos, itensPorPagina)
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
