import { Component, OnInit } from '@angular/core';
import { Point, Line } from './Point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hello-world';
  message: String = "test";
  post = {
    serverVal: false
  }
  constructor() {
  }

  ngOnInit() {
    this.message = "oninit message override";
    this.testFunc({
      x: 10,
      y: 20,
      z: 30

    });
  }
  testFunc(point: Point) {
    console.log("interface type declaration x: " + point.x + " y : " + point.y);

    // creating obj of class
    let line: Line = new Line(10, 20, 30);
    line.display();
    // updating value of x using property menthod
    line.x = 50;
    line.display();
  }

  OnFavChange(isFav){
    console.log("icon clicked from app component- OnFavChange event : ",isFav);
  }





}
