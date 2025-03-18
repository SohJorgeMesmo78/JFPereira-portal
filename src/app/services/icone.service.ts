import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconeService {

  constructor() { }

  getIcone(nome: string, icone?: string): string {
    const nomeFormatado = nome.includes('(')
      ? nome.match(/\(([^)]+)\)/)?.[1] || nome
      : nome;

    var ico = icone
      ? icone.toLowerCase().replace(/\s+/g, '-')
      : nomeFormatado.toLowerCase().replace(/\s+/g, '-');

    return ico
  }


}
