import { QueryService } from './../../service/query.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


import { Group } from './../../model/group';
import { Rule } from './../../model/rule';
import { RuleComponent } from 'src/app/component/rule/rule.component';



@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

 @Input()groupForm: FormGroup;
 @Input()groupLevel:number=0;
 @Input()groupIndex:number;
 @Output()handleDeleteGroup= new EventEmitter()
 disabled:boolean=true;
  constructor(private queryService:QueryService) { }

  ngOnInit() {
  }


  addRule(): void {
    const rule= this.queryService.createRule();
    (this.groupForm.controls['rules'] as FormArray).push(rule);
  }


  addGroup() {
    const group = this.queryService.createGroup();
    (this.groupForm.controls['rules'] as FormArray).push(group);
  }

  deleteChildRule({ruleIndex,id}){
    (this.groupForm.controls['rules'] as FormArray).removeAt(ruleIndex);
  }
  
  deleteGroup(id:any){
   this.handleDeleteGroup.emit({
     groupIndex:this.groupIndex,
     groupLevel:this.groupLevel,
     id
   })
  }// id not need to emit
  deleteChildGroup({groupIndex,groupLevel,id}){
    (this.groupForm.controls['rules'] as FormArray).removeAt(groupIndex);
  }
}