import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  display: boolean = false;

  userCreateForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userCreateForm = this.fb.group({
      // id: [null, [Validators.required, Validators.min(1)]],
      name: ["", [Validators.required, Validators.minLength(4)]],
      username: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    })

  }

  onCreateUserSubmit() {
    console.log(this.userCreateForm.value);
    this.userCreateForm.reset();
    this.display = true;
  }

}
