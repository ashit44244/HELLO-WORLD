import { Component, OnInit, Input, Output,  EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {
  
 @Input('is-favorite') isFavorite: boolean;
 @Output() change = new EventEmitter();


  onStarClick(){
    this.isFavorite = !this.isFavorite;  
    this.change.emit(this.isFavorite);
  }

}
