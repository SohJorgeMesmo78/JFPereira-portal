import { Component, OnInit } from '@angular/core';
import { HabilidadeService } from '../../services/habilidade.service';
import { IHabilidade } from '../../models/IHabilidade';

@Component({
    selector: 'app-habilidades-tecnicas',
    templateUrl: './habilidades-tecnicas.component.html',
    styleUrls: ['./habilidades-tecnicas.component.scss'],
    standalone: false
})
export class HabilidadesTecnicasComponent implements OnInit {
  habilidades: IHabilidade[] = [];

  constructor(private habilidadeService: HabilidadeService) {}

  ngOnInit(): void {
    this.habilidades = this.habilidadeService.getHabilidades();
  }
}
