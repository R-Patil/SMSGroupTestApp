import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/_services';

@Component({
  selector: 'sg-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportForm: FormGroup;
  submitted: boolean = false;

  constructor(private dataService: DataService, private formBuilder: FormBuilder,) {
    this.dataService.getData().subscribe((res) => {
      console.log(res)
    });
  }

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
     
  }

    // convenience getter for easy access to form fields
    get f() { return this.reportForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log(this.f.fromDate, this.f.toDate);
  }

}
