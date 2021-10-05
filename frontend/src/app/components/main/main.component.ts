import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profiles } from 'src/app/models/profiles';
import { Services } from 'src/app/models/services';
import { Reviews } from 'src/app/models/reviews';
import { AppServicesService } from 'src/app/services/app-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  profile!:Profiles
  // services:Services[]=[]
  services!:Services[]

  review!: Reviews


  // services:any[] = []



  constructor(
    private http: HttpClient,
    private AppServices: AppServicesService,

  )

  { }

  ngOnInit(){
    let promise = new Promise <void> ((resolve,reject)=>{
      this.AppServices.getAllServices().toPromise().then(
        (response:any) => {
          console.log(response)
        this.services = response;
        resolve()
      },
      (error:string) => {

      })
    })
    return promise


  }

}
