
import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Input,Output } from '@angular/core';

import { Rule } from './../../model/rule';



@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
   
   @Input() formGroup: FormGroup;
   @Input()ruleIndex:number;
   @Output()handleDeleteRule = new EventEmitter()
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.rules.removeAt(0);
    //   console.log('removed one entry from child: ', this.rules);
    // }, 10000)
    console.log("formGroup",this.formGroup);
  }
  ngDoCheck(){
    console.log("Form Valid",this.formGroup.valid);
  }

deleteRule(id:any){
  this.handleDeleteRule.emit({
     ruleIndex:this.ruleIndex,
     id
  })
  }// id not need to emit
}
