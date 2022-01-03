import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss']
})
export class UpdateRestoComponent implements OnInit {

  editForm = new FormGroup({
  name : new FormControl(''),
  address : new FormControl('')
  })

  constructor() { }



  ngOnInit(): void {
  }

}
