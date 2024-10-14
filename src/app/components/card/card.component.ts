import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  usuario: User | undefined;
  titulo : string = "";

  constructor(private service: UserService){}

  ngOnInit(): void {
    this.titulo = this.service.titulo;
    this.service.getUser(this.service.titulo).subscribe(user => this.usuario = user);
  }

}
