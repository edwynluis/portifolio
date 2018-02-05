import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

	item : Item;

  constructor() { }

  ngOnInit() {
  }

}
