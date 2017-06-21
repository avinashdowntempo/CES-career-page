import { Component, OnInit } from '@angular/core';
import { CareerHttpService } from '../career-http.service';
//import { Careerpost } from '../models/career';
@Component({
  selector: 'career-component',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  providers: [CareerHttpService]
})
export class CareerComponent implements OnInit {
  careers: Careerpost[];
  constructor(private _careerHttpService: CareerHttpService) { }
 getCareers() {
    this._careerHttpService.getCareers().subscribe(data => this.careers = data);
  }
  ngOnInit() {
     this.getCareers();
	 console.log(this.careers);
  }

}
export interface Careerpost{
  title: string;
  technology: String[];
  minexp: number;
  maxexp: number;
  description: string;
  city: string;
  location: string;
  email: string;
}

