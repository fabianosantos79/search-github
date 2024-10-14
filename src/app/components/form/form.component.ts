import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {
  titulo : string = "";

  constructor(private service: UserService){}

  enviarTitulo(){
    this.service.titulo = this.titulo;
  }
}
