import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { RastoService } from '../rasto.service'

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

  constructor( 
    private router: ActivatedRoute,
    private resto : RastoService

    ) { }

  ngOnInit(): void {
  
  //  this is to get data id from "this.router.snapshot.params.id"
    console.log(this.router.snapshot.params.id)

    // with this we will get all data for particular id
    this.resto.getcurrentresto(this.router.snapshot.params.id).subscribe((result:any)=> {
      console.log(result)

    //  this is prefield updation form
        this.editForm = new FormGroup({
        name : new FormControl(result['name']),
        address : new FormControl(result['address'])
      })

    })

  }

  collectio(){
    console.log(this.editForm.value)
    this.resto.updateresto(this.router.snapshot.params.id, this.editForm.value).
    subscribe((result)=> {
      // console.log(result)
    })
  }

}
