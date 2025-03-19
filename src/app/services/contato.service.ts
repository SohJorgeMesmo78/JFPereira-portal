import { Injectable } from '@angular/core';
import { IContato } from '../models/IContato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private Contatos: IContato[] = [
    {
      icone: 'fas fa-envelope',
      nome: 'Email',
      valor: 'jf78pereira@gmail.com',
      link: 'mailto:jf78pereira@gmail.com?subject=Contato%20pelo%20site'
    },
    // {
    //   icone: 'fab fa-whatsapp',
    //   nome: 'WhatsApp',
    //   valor: '+55 13 99138-3830',
    //   link: 'https://wa.me/13991383830'
    // },
    {
      icone: 'fab fa-linkedin',
      nome: 'LinkedIn',
      valor: 'Jorge Fernando Pereira',
      link: 'https://www.linkedin.com/in/sohjorgemesmo78/'
    },
  ];

  constructor() { }

  getContatos(): IContato[] {
    return this.Contatos;
  }

}
