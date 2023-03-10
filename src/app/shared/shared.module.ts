import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PropertyEventComponent } from './pages/property-event/property-event.component';
import { ExercicioDiretivasComponent } from './pages/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './pages/exercicio-pipes/exercicio-pipes.component';
import { MainComponent } from './components/main/main.component';
import { ExercicioProdutosComponent } from './pages/exercicio-produtos/exercicio-produtos.component';
import { TabelaProdutosComponent } from './pages/tabela-produtos/tabela-produtos.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ExercicioHttpApiComponent } from './pages/exercicio-http-api/exercicio-http-api.component';
import { ExCountriesComponent } from './pages/ex-countries/ex-countries.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { DetalhesContatoComponent } from './components/detalhes-contato/detalhes-contato.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PropertyEventComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    MainComponent,
    ExercicioProdutosComponent,
    TabelaProdutosComponent,
    ExercicioHttpApiComponent,
    ExCountriesComponent,
    ContatosComponent,
    DetalhesContatoComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PropertyEventComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    MainComponent,
    ExercicioProdutosComponent,
    TabelaProdutosComponent,
  ]
})
export class SharedModule { }
