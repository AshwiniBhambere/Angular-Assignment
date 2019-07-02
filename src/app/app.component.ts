import { Component } from '@angular/core';
import { QueryService } from 'src/app/service/query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'querybuilder-Assignment';
  groupForm:any

  constructor(private queryService:QueryService){
     this.groupForm=this.queryService.getInitialGroup();
  }
}
