import { CoursesService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  courses;
  imageUrl = "http://lorempixel.com/400/200";
  isActive =false;
  email= "me@example.com";
  text= `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting indust̥ry.̥ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>`;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onClick($event){
    console.log("button is clicked", $event);
  }

  onKeyUp(){
    console.log("on click of enter ", this.email);
  }

  ngOnInit() {
  }

}
