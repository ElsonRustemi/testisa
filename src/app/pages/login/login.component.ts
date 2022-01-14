import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service/service.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("divForm") divForm: ElementRef;

  loginCredencial: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService,  private router: Router) { }

  ngOnInit(): void {
    this.loginCredencial = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login(user){
    this.router.navigateByUrl('pages/home')
  }
}
