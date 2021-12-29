import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    RestorantForm = new FormGroup({
    name : new FormControl(''),
    address : new FormControl('')
  })

    restorantdata(){
      console.log(this.RestorantForm.value)
    }


}
