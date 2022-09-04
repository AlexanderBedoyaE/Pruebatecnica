import { Component,OnInit } from '@angular/core';
import { RegistrosServices } from './registros/registros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registros:any;

  constructor(public libro:RegistrosServices){}

  ngOnInit(){
    this.libro.getRegistros().subscribe
    (
      (r) => { this.registros= r; console.log(r)},
      (e) => {console.error(e) }
    )
  }
}
