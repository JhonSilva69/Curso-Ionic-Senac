import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router,
    private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }
  novo() {
    this.router.navigate(['novo']);
  }

}
