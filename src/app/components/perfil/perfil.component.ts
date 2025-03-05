import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  hoje = new Date();
  dataNascimento = new Date(2000, 3, 5, 19, 33);
  constructor() { }

  ngOnInit(): void {
  }

  
  idade(){
    let idade = this.hoje.getFullYear() - this.dataNascimento.getFullYear();
    const mes = this.hoje.getMonth() + 1;
    const dia = this.hoje.getDate();
    // Ajusta a idade caso o aniversário ainda não tenha ocorrido este ano
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
}
