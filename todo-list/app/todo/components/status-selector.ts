import {Component, Input, Output, EventEmitter, OnInit} from "angular2/core";

@Component({
  selector: 'status-selector',
  template: `<div>
    <select #mySelect (change)="select.emit(mySelect.value)">
      <option *ngFor="#status of statuses">
        {{status}}
      </option>
    </select>
  </div>`
})
export class StatusSelector implements OnInit{
  @Output() select = new EventEmitter();
  statuses = ["started", "completed"];

  ngOnInit() {
    this.select.emit(this.statuses[0]);
  }
}