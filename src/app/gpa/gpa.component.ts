/*============================
; Title: GPA Component Class File
; Author: George Henderson
; Date: 04 July 2021
; Description: Contains data for the GPA component.
;============================*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal : number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

}
