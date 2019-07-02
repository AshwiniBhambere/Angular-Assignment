import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  groupForm: FormGroup
  rules: any;
  mainRule: any;

  constructor(private formBuilder: FormBuilder) { 

    this.groupForm=this.formBuilder.group({
      rules: this.formBuilder.array([this.createRule()])   
    })
   
  }


  createGroup(): FormGroup {
    return this.formBuilder.group({
      id: getUniqueID(),
      type:'group',
      rules: this.formBuilder.array([this.createRule()])
    })
  }
  
  createRule(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(getUniqueID(),[Validators.required]),
      name:new FormControl("",[Validators.required]),
      type:'rule',
    });
  }

  getInitialGroup(){
    return this.groupForm;
  }

}

const getUniqueID = () => {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase();
};


