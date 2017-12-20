import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  @ViewChild('grid')
  private grid: any;

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // ObservableMedia does not fire on init so you have to manually update the grid first.
    this.updateGrid();
    this.media.subscribe(change => { this.updateGrid(); });
  }

  updateGrid(): void {

    console.log('ired')
    if (this.media.isActive('xl')) { this.grid.cols = 3; }
    else if (this.media.isActive('lg')) { this.grid.cols = 3; }
    else if (this.media.isActive('md')) { this.grid.cols = 2; }
    else if (this.media.isActive('sm')) { this.grid.cols = 2; }
    else if (this.media.isActive('xs')) { this.grid.cols = 1; }
  }

}
