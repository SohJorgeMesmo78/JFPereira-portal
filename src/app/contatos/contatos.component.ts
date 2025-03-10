import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  contatos = [
    { icone: 'fas fa-envelope', nome: 'Email', valor: 'jf78pereira@gmail.com', link: 'mailto:jf78pereira@gmail.com?subject=Contato%20pelo%20site' },
    { icone: 'fas fa-phone-alt', nome: 'Telefone', valor: '+55 13 99138-3830', link: 'https://w.app/sohjorgemesmo78' },
    { icone: 'fab fa-linkedin', nome: 'LinkedIn', valor: 'Jorge Fernando Pereira', link: 'https://www.linkedin.com/in/sohjorgemesmo78/' },
    // { icone: 'fab fa-instagram', nome: 'Instagram', valor: '@exemplo', link: 'https://www.instagram.com/exemplo' }
  ];
}
