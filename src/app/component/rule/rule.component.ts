
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';

import { Rule } from './../../model/rule';


@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
   
   @Input() formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.rules.removeAt(0);
    //   console.log('removed one entry from child: ', this.rules);
    // }, 10000)
  }

// deleteRule(i:number){
//   this.rules.removeAt(i);
//   }
}
