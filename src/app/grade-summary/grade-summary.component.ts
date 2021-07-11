/*============================
; Title: Grade-Summary Component Class File
; Author: George Henderson
; Date: 04 July 2021
; Description: Contains data for the Grade-Summary component.
;============================*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade : string = '';
  @Input() course : string = '';

  constructor() {

  }

  ngOnInit(): void {
  }

}
