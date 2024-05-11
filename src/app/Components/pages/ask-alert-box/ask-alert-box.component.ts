import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ask-alert-box',
  templateUrl: './ask-alert-box.component.html',
  styleUrls: ['./ask-alert-box.component.css']
})
export class AskAlertBoxComponent {
  @Input() message : string;
  @Output() tryReturningData = new EventEmitter<boolean>();
  deleteMode : boolean;
  constructor() {}


  returnClicked(bool : boolean) {
    this.deleteMode = bool 

    this.tryReturningData.emit(this.deleteMode)
  }

}
