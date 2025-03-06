import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconeService {

  constructor() { }

  getIcone(nome: string, icone?: string): string {
    return icone ? icone.toLowerCase().replace(/\s+/g, '-') : nome.toLowerCase().replace(/\s+/g, '-');

  }
}
