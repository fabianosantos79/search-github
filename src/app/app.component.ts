import { User } from './../models/user';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  usuario: User | undefined;
  username: string = '';
  start: string = '';
  erroMessage: string = 'Usuário não encontrado';

  constructor(
    private userService: UserService,
    private toaster: ToastrService
  ){}

  enviar(){
    this.start = this.username;
    this.userService.getUser(this.username).subscribe({
      next: (user: User) =>  {
        this.usuario = user;
        this.username = '';
      },
      error: e => {
        if(e.error.message){
          this.toaster.error('Usuário não encontrado')
        }
      }
    });
  }

}
