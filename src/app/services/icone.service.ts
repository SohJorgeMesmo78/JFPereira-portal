import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconeService {

  constructor() { }

  getIcone(nome: string, icone?: string): string {
    // Verifica se o nome tem parênteses
    const nomeFormatado = nome.includes('(')
      ? nome.match(/\(([^)]+)\)/)?.[1] || nome  // Extrai o texto dentro dos parênteses
      : nome;

    // Transforma o nome (ou o nome extraído entre parênteses) para o formato desejado
    var ico = icone
      ? icone.toLowerCase().replace(/\s+/g, '-')
      : nomeFormatado.toLowerCase().replace(/\s+/g, '-');

    return ico
  }


}
