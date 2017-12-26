import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Grade } from '../../../model/grades';
import { MatTableDataSource, MatSort } from '@angular/material';
import { GRADES } from '../../../data/grades-mock';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})

export class GradesComponent implements OnInit, AfterViewInit {
  dataSource: any;
  displayedColumns: any;
  GRADE_DATA: Grade[];

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.GRADE_DATA = GRADES;
    this.displayedColumns = ['subject', 'date', 'grade'];
    this.dataSource = new MatTableDataSource(this.GRADE_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


}

