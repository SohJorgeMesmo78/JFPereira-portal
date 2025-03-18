import { Component, OnInit } from '@angular/core';
import { FormacaoService } from '../../services/formacao.service';
import { IconeService } from '../../services/icone.service';
import { IFormacao } from '../../models/IFormacao';

@Component({
  selector: 'app-formacoes',
  templateUrl: './formacoes.component.html',
  styleUrls: ['./formacoes.component.scss']
})
export class FormacoesComponent implements OnInit {
  formacoes: IFormacao[] = [];

  constructor(
    private formacaoService: FormacaoService,
    private iconeService: IconeService
  ) {}

  ngOnInit(): void {
    this.formacoes = this.formacaoService.getFormacoes();
  }

  getIcone(item: IFormacao): string {
    return `assets/formacoes/${this.iconeService.getIcone(item.nome, item?.icone)}.png`;
  }
}
