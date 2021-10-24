import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: AuthenticationService){
  
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // subscribe là để lấy được dữ liệu
    this.dataService.Login("tuananh010320@gmail.com","tuananh123").subscribe(res=>res)
  }
  title = 'project-test';
}

