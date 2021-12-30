import { Component, OnInit } from '@angular/core';
import { RastoService} from '../rasto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {

  constructor( private rasto:RastoService ) { }

  data:any= {};
  ngOnInit(): void {
    this.rasto.getlist().subscribe((result)=> {
      this.data= result
    })
  }
}
