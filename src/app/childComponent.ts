import { Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'child-app',
  templateUrl: './child.component.html',
  styleUrls: ['./app.component.css']
})
export class childComponent implements OnInit {

  value = '';
  instructions: string[] = ['mouseenter to show uppercase',
   'double click to hide or show', 'click just to send color to parent'];

  @Output() colorChange = new EventEmitter<string>();
  names: string[];

constructor() {
              this.names = ['Sravy', 'Raja', 'Padmavathi'];

  }
 getColor(el): void{
   this.value = el.style.color;
   this.colorChange.emit(this.value);
 }



  ngOnInit(): void {
    this.value = this.value;
    this.colorChange.emit(this.value);
  }
}
