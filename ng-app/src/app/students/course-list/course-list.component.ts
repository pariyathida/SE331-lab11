import {Component, Input} from '@angular/core';
import {Student} from '../student';
import {Course} from '../course';
import {CourseServerService} from '../../service/course-server.service';
import {Router} from "@angular/router";
import {StudentsDataService} from '../../service/students-data.service';

@Component({
 selector: 'course-list',
 templateUrl: './course-list.component.html',
 styleUrls:['./course-list.component.css']
})
export class CourseListComponent {
  //courses:Course[]
  constructor(private studentDataService: StudentsDataService, private router: Router) {
  }

  @Input() count:number;
  @Input('enrolledCourse') courses:Course;

  ngOnInit() {
    // this.studentDataService.getStudentsData()
    //   .subscribe(() => {},
    //     (error : Error ) => {
    //       if (error.message === 'UnAuthorize'){
    //         this.router.navigate(['login'],{queryParams:{source:'student'}});
    //       }
    //     });
  }


}
