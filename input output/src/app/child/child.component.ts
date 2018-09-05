import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //**-----INPUT-----**
  @Input()  public state:string;

  //**-----OUTPUT-----**
  @Output() event:EventEmitter<string>= new EventEmitter();



  public gudbye="Gudbye";

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    debugger;
    this.event.emit(this.gudbye);
  }

}
