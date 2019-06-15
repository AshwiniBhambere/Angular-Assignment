import { Component, OnInit } from '@angular/core';
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

  groupForm: FormGroup
  rules: any;
  mainRule: any;

  ruleobj: Rule = {
    ruleId: "1",
    ruleName: "RuleOne",
    type: "Rule"
  };
  groupObj: Group = {
    groupId: 1,
    groupName: "GroupOne",
    type: "Group",
    rules: [this.ruleobj]
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    // setTimeout(()=>{
    //   console.log('--in parent: ', this.rules)
    // }, 15000);
    // this.form = this.formBuilder.group({
    //   rules: this.formBuilder.array([this.createRule()])
    // });

    this.groupForm = this.formBuilder.group({
      mainRule: this.formBuilder.array([this.createGroup()])
    })
    //  this.mainRule = this.groupForm.get('mainRule') as FormArray;
    //  console.log("mainRule",this.mainRule);
  }

  createGroup(): FormGroup {
    return this.formBuilder.group({
      groupid: '',
      rules: this.formBuilder.array([this.createRule()])
    })
  }

  createRule(): FormGroup {
    return this.formBuilder.group({
      id: '',
      name: '',
      rules: ''
    });
  }

  addRule(): void {
    // this.rules = this.groupForm.get('rules') as FormArray;
    // this.rules.push(this.createRule());
  }


  addGroup() {
    this.mainRule = this.groupForm.get('mainRule') as FormArray;
    this.mainRule.push(this.createGroup());
    //    this.mainRule.controls.forEach(element => {
    //      element.controls['rules'].push(this.createGroup());
    //    });
    //  console.log("MainRule",this.mainRule);

    // }
  }
}