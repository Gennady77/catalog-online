import { Component } from '@angular/core';
import { LaptopData } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listData: LaptopData[] = [{
    typeC: 'ноутбк',
    model: 'Irbis NB120 YOGA',
    manufacturerCode: '[NB120 YOGA]',
    os: 'Windows 10 Pro',
    gaming: false,
    releaseYear: new Date(2021, 0),
  }];
}
