import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'cadastro-viagem', component:  CadastroViagemComponent},
  {path:'', component:  ListagemViagemComponent},
  {path:'', component:  HomeComponent},
  {path:'excluir-viagem/:id', component:  ExclusaoViagemComponent},
  {path:'detalhes-viagem/:id', component:  DetalhesViagemComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
