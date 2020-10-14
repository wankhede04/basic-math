import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solution-time',
  templateUrl: './solution-time.component.html',
  styleUrls: ['./solution-time.component.scss']
})
export class SolutionTimeComponent implements OnInit {

  @Input()
  public secondsPerSolution: number;

  constructor() { }

  ngOnInit() {
  }

}
