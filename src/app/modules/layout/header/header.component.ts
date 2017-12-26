import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide',   style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  state = 'hide';
  headerClass: string;

  constructor(public el: ElementRef) { }

  ngOnInit () {
    this.headerClass = 'header__initial';
  }

  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop + 400;
    const scrollPosition = window.pageYOffset;

    scrollPosition <= componentPosition
      ? this.state = 'hide'
      : this.state = 'show';

    this.state === 'hide'
      ? this.headerClass = 'header__initial'
      : this.headerClass = 'header__end';
  }
}
