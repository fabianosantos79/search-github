import { User } from './../models/user';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  constructor(private userService: UserService){}

  enviar(){
    this.userService.getUser(this.username).subscribe((user: User) => this.usuario = user);
  }

}
