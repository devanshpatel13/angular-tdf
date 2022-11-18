import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;
  submmited = false;
  errorMsg = '';


  userModel = new User('Rob', 'r@gmail.com', 223332223, 'default', 'morning', true)
  constructor(private _enrollmentService : EnrollmentService){}
  validateTopic(value : any){
    if (value === "default"){
      this.topicHasError = true
    } else{
      this.topicHasError =  false 
    }
  }
  onSubmit(userForm : any){
    console.log(userForm)
    // this.submmited = true
    //   this._enrollmentService.enroll(this.userModel)
    //   .subscribe(
    //     data => console.log('Success!', data),
    //     error => this.errorMsg = error.statusText
    //   )
    }
}
