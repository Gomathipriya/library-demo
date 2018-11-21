import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  //styleUrls: ['./test.component.css']
  template:  `
  <h1>
  <ng-content></ng-content>
</h1>
  `,
  styles: ['h1 { color: red; }']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
