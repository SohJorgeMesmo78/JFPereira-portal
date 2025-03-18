import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../services/experiencia.service';
import { IconeService } from '../../services/icone.service';
import { IExperiencia } from '../../models/iexperiencia';

@Component({
  selector: 'app-experiencias-profissionais',
  templateUrl: './experiencias-profissionais.component.html',
  styleUrls: ['./experiencias-profissionais.component.scss']
})
export class ExperienciasProfissionaisComponent implements OnInit {
  experiencias: IExperiencia[] = [];

  constructor(
    private experienciaService: ExperienciaService,
    private iconeService: IconeService
  ) {}

  ngOnInit(): void {
    this.experiencias = this.experienciaService.getExperiencias();
  }

  getIcone(experiencia: IExperiencia): string {
    return `assets/empresas/${this.iconeService.getIcone(experiencia.empresa, experiencia?.icone)}.png`;
  }
}
