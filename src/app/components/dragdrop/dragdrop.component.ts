import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  constructor() {
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
    var data = ev.dataTransfer.getData("text");

    if(target === 'drop') {
      ev.target.appendChild(document.getElementById(data + 'div'));
      document.getElementById(data).style.display = 'none';

    } else if(target === 'drag') {
      const id = data.substring(0, data.length-3);
      document.getElementById(id).style.display = '';
      const element = document.getElementById(data);
      const holder = document.getElementById('holder');
      holder.appendChild(element);
    }

  }

}
