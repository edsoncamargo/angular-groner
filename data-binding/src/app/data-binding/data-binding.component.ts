import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://edsoncamargo.com.br"
  angularCourse: boolean = true;
  urlImage: string = "http://lorempixel.com/400/200/";

  auxInputValue: string = "";
  currentInputValue: string = "";
  saveInputValue: string = "";

  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() { }

  getValue = (() => 1);

  getLikeCourse = (() => true);

  clickedButton = (() => {
    alert("Clicked button.");
  });

  onKeyUp = ((event: KeyboardEvent) => {
    this.auxInputValue = (<HTMLInputElement>event.target).value;
  });

  auxValue = (() => {
    this.currentInputValue = this.auxInputValue;
  });

  saveValue = ((value) => {
    this.saveInputValue = value;
  });

  onMouseOverOut = (() => {
    this.isMouseOver = !this.isMouseOver;
  });

}
