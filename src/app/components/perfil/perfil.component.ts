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
  hoje = new Date();
  dataNascimento = new Date(2000, 3, 5, 19, 33);

  infos = {
    idade: "",
    empregoAtual: "",
    formacao: "",
  }

  constructor(
    private experienciaService: ExperienciaService,
    private formacaoService: FormacaoService,
  ) { }

  ngOnInit(): void {
    this.infos.idade = this.idade();
    this.infos.empregoAtual = this.obterEmpregoAtual();
    this.infos.formacao = this.obterFormacao();
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  idade(){
    let idade = this.hoje.getFullYear() - this.dataNascimento.getFullYear();
    const mes = this.hoje.getMonth() + 1;
    const dia = this.hoje.getDate();
    
    if (mes < this.dataNascimento.getMonth() || (mes === this.dataNascimento.getMonth() && dia < this.dataNascimento.getDate())) {
      idade--;
    }
    var anos: string = " "

    if(idade == 1){
      anos = " ano"
    }
    else{
      anos = " anos"
    }

    return idade + anos;
  }

  obterEmpregoAtual(): any {
    var exp = this.experienciaService.obterEmpregoAtual();
    return exp;
  }
  
  obterFormacao(): any {
    var formacao = this.formacaoService.obterFormacao();
    return formacao;
  }
}
