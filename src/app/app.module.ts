import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { InputComponent } from './component/input/input.component';
import { TarefaComponent } from './component/tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
