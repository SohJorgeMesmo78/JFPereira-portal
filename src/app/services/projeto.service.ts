import { Injectable } from '@angular/core';
import { IProjeto } from '../models/iprojeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private projetos: IProjeto[] = [
    {
      nome: 'JFPereira Portfolio',
      github: 'https://github.com/SohJorgeMesmo78/JFPereira-portal',
      site: 'https://jf-pereira.vercel.app/'
    }
  ];

  constructor() { }

  getProjetos(): IProjeto[] {
    return this.projetos;
  }
}
