import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-numbers',
  templateUrl: './add-numbers.component.html',
  styleUrls: ['./add-numbers.component.scss']
})
export class AddNumbersComponent implements OnInit {
  public averageSolutionTime: number;

  constructor() { }

  ngOnInit() {
    this.averageSolutionTime = 1.2;
  }
}
