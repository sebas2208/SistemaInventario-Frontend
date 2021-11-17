import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {  }

  CerrarSesion(){
    this.router.navigate(["logout"])
  }

  onLogOut(): void {
    window.location.reload();
  }

}
