/*==============================
; Title: Sign-in Service
; Author: George Henderson
; Date: 10 July 2021
; Description: Validates user for sign-in.
;==============================*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentsId : Array<number> = [ 1007, 1008, 1009, 1010, 1011, 1012 ];

  constructor() {

  }

  validate(studentId : number) {
    return this.studentsId.some(id => id === studentId);
  }
}
