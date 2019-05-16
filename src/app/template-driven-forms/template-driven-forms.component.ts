import { Component, OnInit, Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

function passwordMatcher(c: AbstractControl){
  if(!c.get('password') || !c.get('confirm')) return null;
  return c.get('password').value === c.get('confirm').value ? null : {'nomatch': true}
}

@Directive({
  selector: '[password-matcher]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher}
  ]

})
export class PasswordMatcher{

}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  name;
  constructor() { 
    this.name = {first: 'John', last: 'K'}
  }

  ngOnInit() {
  }

}
