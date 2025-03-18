import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HabilidadesTecnicasComponent } from './components/habilidades-tecnicas/habilidades-tecnicas.component';
import { ExperienciasProfissionaisComponent } from './components/experiencias-profissionais/experiencias-profissionais.component';
import { FormacoesComponent } from './components/formacoes/formacoes.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    //Pages
    HomeComponent,
    //Components
    MenuComponent,
    PerfilComponent,
    HabilidadesTecnicasComponent,
    ExperienciasProfissionaisComponent,
    FormacoesComponent,
    ContatosComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
