import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DataService2 } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-badge',
  templateUrl: './badge2.component.html'
})
export class AppBadgeComponent2 implements OnInit {
  data: any;
  data2:any;
  myForm!: FormGroup;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {}
  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
      });
      this.dataService.getData2()
      .subscribe(data2 => {
        this.data2 = data2;
      });

      this.myForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });
  }
  // ngOnInit(): void {
  //   this.myForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  // ngOnInit(): void {
  // }
  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log(formData);
      // Perform form submission logic
    }
  }
  count = 0;
  incrementCount() {
    this.count++;
  }
  decreaseCount() {
    if (this.count > 0) {
      this.count--;
    }
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;

  }
}
