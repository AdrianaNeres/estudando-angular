import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FormsModule } from '@angular/forms';
import { ComponentAngularComponent } from './component-angular/component-angular.component';
import { CicloDeVidaModule } from './ciclo-de-vida/ciclo-de-vida.module';
import { PipesModule } from './pipes/pipes.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivasModule } from './diretivas/diretivas.module';
import { ComunicacaoDeComponentesModule } from './comunicacao-de-componentes/comunicacao-de-componentes.module';
import { ModuloTesteModule } from './modulo-teste/modulo-teste.module';
import { FormsModule2 } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ComponentAngularComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    CicloDeVidaModule,
    PipesModule,
    DataBindingModule,
    DiretivasModule,
    ComunicacaoDeComponentesModule,
    ModuloTesteModule,
    FormsModule2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
