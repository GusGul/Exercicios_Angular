import { ExtratoService } from './../../../services/extrato.service';
import { Component, OnInit } from '@angular/core';
import { Transacao } from 'src/app/interfaces/Transacao';
import { mergeMap, take } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-exercicio-http-api',
  templateUrl: './exercicio-http-api.component.html',
  styleUrls: ['./exercicio-http-api.component.css']
})
export class ExercicioHttpApiComponent implements OnInit {

  constructor(
    private extratoService:ExtratoService
  ) { }

  ngOnInit(): void {
    this.carregarExtrato();
  }

  transacoes:Transacao[] = [];
  page:number = 1;
  loading!:Boolean;
  errorLoading!:Boolean;

  carregarExtrato() {
    this.loading = true;
    this.errorLoading = false;

    // se 'inscrevendo' na chamada da api, o observer dará o 'response' assim que a chamada retornar.
    this.extratoService.getTransacoes(this.page)
      .pipe(
        take(1), // O take fará com que a gente se DESINSCREVA após o SUBSCRIBE. Quando isso for resolvido 1 vez, vamos se desinscrever.
        finalize(() => this.loading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response:Transacao[]){
    //this.loading = false; agora está sendo tratado pela função "finalize"
    this.errorLoading = false;
    this.transacoes = response;
  }

  onError(error:any){
    //this.loading = false; agora está sendo tratado pela função "finalize"
    this.errorLoading = true;
    console.log(error);
  }

  lastPage(){
    this.page = this.page - 1;
    this.carregarExtrato();
  }

  nextPage(){
    this.page = this.page + 1;
    this.carregarExtrato();
  }

}
