import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
  selector: 'status-selector',
  template: `<div>
    <select #mySelect (change)="selected.emit(mySelect.value)">
      <option *ngFor="#status of statuses">
        {{status}}
      </option>
    </select>
  </div>`
})
export class StatusSelector {
  @Output selected = new EventEmitter();
  statuses = ["started", "completed"];

  ngOnInit() {
    this.selected.emit(this.statuses[0]);
  }
}