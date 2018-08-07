import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev, target) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");

    if (target === 'drop') {

      ev.target.appendChild(this.elementRef.nativeElement.querySelector('#' + data + 'div'));
      this.elementRef.nativeElement.querySelector('#' + data).style.display = 'none';

    } else if (target === 'drag') {

      const id = data.substring(0, data.length - 3);
      this.elementRef.nativeElement.querySelector('#' + id).style.display = '';
      const element = this.elementRef.nativeElement.querySelector('#' + data);
      const holder = this.elementRef.nativeElement.querySelector('#holder');
      holder.appendChild(element);

    }
  }

}
