import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../services/experiencia.service';
import { FormacaoService } from '../../services/formacao.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    standalone: false
})
export class PerfilComponent implements OnInit {
  private readonly hoje = new Date();
  private readonly dataNascimento = new Date(2000, 3, 5);

  infos = {
    idade: '',
    empregoAtual: '',
    formacao: '',
  };

  constructor(
    private experienciaService: ExperienciaService,
    private formacaoService: FormacaoService,
  ) { }

  ngOnInit(): void {
    this.infos.idade = this.idade();
    this.infos.empregoAtual = this.obterEmpregoAtual();
    this.infos.formacao = this.obterFormacao();
  }

  idade(): string {
    let idade = this.hoje.getFullYear() - this.dataNascimento.getFullYear();
    const mes = this.hoje.getMonth();
    const dia = this.hoje.getDate();
    
    if (mes < this.dataNascimento.getMonth() || (mes === this.dataNascimento.getMonth() && dia < this.dataNascimento.getDate())) {
      idade--;
    }
    return `${idade} ${idade === 1 ? 'ano' : 'anos'}`;
  }

  obterEmpregoAtual(): string {
    return this.experienciaService.obterEmpregoAtual();
  }
  
  obterFormacao(): string {
    return this.formacaoService.obterFormacao();
  }
}
