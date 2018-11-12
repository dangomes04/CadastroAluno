import { Component, OnInit } from '@angular/core';
import { Aluno } from '../shared/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
title = 'Alunos';
aluno: Aluno[];

  constructor() { }

  ngOnInit() {
    this.aluno = [
    { Matricula: '0001', Nome: 'Danrley Gomes', DataNascimento: '19-05-1996', Endereco: 'Rua Rutulo', RespFinanceiro: 'Roque',
     RespCpf: '99999999999', Email: 'roque@gmail.com', Situacao: true },
     { Matricula: '0002', Nome: 'Danrley Gomes', DataNascimento: '19-05-1996', Endereco: 'Rua Rutulo', RespFinanceiro: 'Roque',
     RespCpf: '99999999999', Email: 'roque@gmail.com', Situacao: true }
    ];
  }

}
