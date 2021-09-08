import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  public listes:any=[
  {
id:1,
user:"locatelli",
date:"23-05-2021",
status:"celibataire",

reason:"ras"
},

  {
id:2,
user:"locatelli barbara",
date:"23-05-2022",
status:"celibataire",

reason:"rien"
},
  {
id:3,
user:"ballotelli",
date:"26-05-2021",
status:"mariee",

reason:"ras"
},
  {
id:4,
user:"mercon locatelli",
date:"23-08-2021",
status:"mariee",

reason:"ras"
},
  {
id:5,
user:"sagna",
date:"23-10-2021",
status:"mariee",

reason:"ras"
},
  {
id:6,
user:"sergeo locatelli",
date:"03-05-2021",
status:"celibataire",

reason:"ras"
},

  {
id:7,
user:"locatelli",
date:"23-05-2021",
status:"celibataire",

reason:"ras"
},
{
id:8,
user:"valer locatelli",
date:"28-15-2021",
status:"mariee/celibataire",

reason:"personne"
}

  ];


private _hotelFilter="mot";
public filteredHotels:any[]=[];
public get hotelFilter():string{
  return this._hotelFilter; 
}
public set hotelFilter(filter:string){
  this._hotelFilter=filter;
  this.filteredHotels=this.hotelFilter ? this.filterHotels(this.hotelFilter):this.listes;
}
private filterHotels(critria:string):any[]{
  critria=critria.toLowerCase();
  const res=this.listes.filter(

(liste:any)=>liste.user.toLowerCase().indexOf(critria) !=-1
    );
  return res;
}
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filteredHotels=this.listes;
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
}
