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

  const base = icone || nomeFormatado;

  const ico = base
    .toLowerCase()
    .normalize('NFD') // separa acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/["'`´]/g, '') // remove aspas
    .replace(/[^a-z0-9\s-]/g, '') // remove qualquer coisa estranha
    .trim()
    .replace(/\s+/g, '-'); // espaço -> hífen

  return ico;
}


}
