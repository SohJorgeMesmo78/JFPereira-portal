import { Component, OnInit } from '@angular/core';
import { HabilidadeService } from '../../services/habilidade.service';
import { IconeService } from '../../services/icone.service';
import { IHabilidade } from '../../models/ihabilidade';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrls: ['./habilidades-tecnicas.component.scss']
})
export class HabilidadesTecnicasComponent implements OnInit {
  habilidades: IHabilidade[] = [];

  constructor(private iconeService: IconeService, private habilidadeService: HabilidadeService) {}

  ngOnInit(): void {
    this.habilidades = this.habilidadeService.getHabilidades();
  }

  getIcone(habilidade: IHabilidade): string {
    return `assets/icons/${this.iconeService.getIcone(habilidade.nome, habilidade?.icone)}.svg`;
  }
}
