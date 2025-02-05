import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  
  templateUrl: './search-box.component.html',
  styles: ``
})

export class SearchBoxComponent {

  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  emitValue(value: string): void{
    console.log('searchbox component')
    console.log(value)
    this.onValue.emit(value);

}

}
