import { Component, OnInit } from '@angular/core';
import { Aluno } from '../shared/aluno';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: Aluno;
  title = '';

  constructor() { }

  ngOnInit() {
    this.title = 'Novo aluno';
    this.aluno = new Aluno();
  }

onSubmit() {

console.log(this.aluno);

}

}
