import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';

function passwordMatcher(c: AbstractControl){
  return c.get('password').value === c.get('confirm').value ? null : {'nomatch': true}

}
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // Creating form use FormGroup, FormControl
  // form = new FormGroup({
  //   first: new FormControl(),
  //   last: new FormControl(),
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   confirm: new FormControl(),
  //   newsletter: new FormControl()
  // });

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first: null,
      last: 'K',
      account: this.fb.group({
        username: '',
        password: ['', Validators.required],
        confirm: ['', Validators.required],
      }, {validators: passwordMatcher}),      
      newsletter: [''],
      addresses: this.fb.array([
        this.fb.group({
          street: 'First Street',
          city: 'Vizag'
        }),
        this.fb.group({
          street: 'Second Street',
          city: 'HYD'
        })
      ])
    })

    // to set single value in form
    this.form.get('first').setValue('Krish');

    // to set multiple values in form
    this.form.patchValue({first: 'John', last: 'G', username: 'prathuish'})
  }

  ngOnInit() {
  }

  addAddress(){
    (this.form.get('addresses') as FormArray).push(this.fb.group({
      street: '',
      city: ''
    }))
  }

}
