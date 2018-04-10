import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
	
	user : any = {}

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
