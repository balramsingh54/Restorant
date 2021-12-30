import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl } from '@angular/forms';
import { RastoService} from '../rasto.service';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {

  RestorantForm = new FormGroup({
  name : new FormControl(''),
  address : new FormControl('')
  })

  constructor( private resto:RastoService) { }

  ngOnInit(): void {}

  restorantdata(){
    // console.log(this.RestorantForm.value)
    this.resto.postlist(this.RestorantForm.value).subscribe()
  }

}
