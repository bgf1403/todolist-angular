import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tarefas:Tarefa[] = [
    {
      feita:true,
      descricao: "Estudar",
      prioridade:Prioridade.Alta
    },
    {
      feita:false,
      descricao:"Java",
      prioridade:Prioridade.Media
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
