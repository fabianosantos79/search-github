import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./components/form/form.component";
import { CardComponent } from "./components/card/card.component";
import { ContainerComponent } from "./components/container/container.component";
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent, CardComponent, ContainerComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
titulo: string = '';

  constructor(private userService: UserService){}

  ngOnInit(){
    this.titulo = this.userService.titulo;
  }

}
