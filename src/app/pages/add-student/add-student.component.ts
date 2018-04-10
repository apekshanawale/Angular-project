import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

	user:any = {}

  constructor() { }

  ngOnInit() {
  }
	
	getModel(yname){
		console.log(yname);
	}
	onSubmit(userModel, userForm){
	console.log(userModel, userForm);
}
}