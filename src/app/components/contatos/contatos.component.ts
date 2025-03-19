import { Component } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { IContato } from '../../models/IContato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.scss'
})
export class ContatosComponent {
  contatos: IContato[] = [];

  constructor(private contatoService: ContatoService) {}
  
    ngOnInit(): void {
      this.contatos = this.contatoService.getContatos();
    }
}
