import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
	
	users:any=[{fname : "Apeksha", lname : "Nawale", phn : "9635896532", em : "apeksha@gmail.com", address : "wakad", _id : 1}]

  constructor() { }

  ngOnInit() {
  }

}
