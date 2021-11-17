import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router){}

  Compra(){
    this.router.navigate(["compra"]);
  }
  Venta(){
    this.router.navigate(["venta"]);
  }
  
  ngOnInit(): void {
  }

}
