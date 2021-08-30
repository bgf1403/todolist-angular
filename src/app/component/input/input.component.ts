import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() lista!:Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
