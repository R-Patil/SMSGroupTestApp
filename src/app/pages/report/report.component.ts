import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/_services';
import { jsondata } from 'src/data/data.json';

@Component({
  selector: 'sg-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [DatePipe]
})
export class ReportComponent implements OnInit {

  reportForm: FormGroup;
  submitted: boolean = false;
  customValidation = "none";
  jsFromDate: any;
  jsToDate: any;
  gridData: any;
  error: any;

  constructor(private dataService: DataService, private formBuilder: FormBuilder, public datepipe: DatePipe) {

  }



  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    }, { validator: this.dateValidator.bind(this) });

  }

  dateValidator(g: FormGroup) {
    this.jsFromDate = g.get('fromDate').value;
    this.jsToDate = g.get('toDate').value;
    if (this.jsFromDate && this.jsToDate) {
      this.customValidation = 'none';
      this.jsFromDate = new Date(this.jsFromDate.year, this.jsFromDate.month - 1, this.jsFromDate.day);
      this.jsToDate = new Date(this.jsToDate.year, this.jsToDate.month - 1, this.jsToDate.day);
      if (this.jsFromDate <= this.jsToDate) {
        return null;
      }
      this.customValidation = 'block';
      return { 'unsequencial': true };
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.reportForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.reportForm.invalid) {
      return;
    }
    this.error = null;
    this.jsFromDate = this.datepipe.transform(this.jsFromDate, 'yyyy-MM-dd');
    this.jsToDate = this.datepipe.transform(this.jsToDate, 'yyyy-MM-dd');
    this.dataService.getData(this.jsFromDate, this.jsToDate).subscribe((res) => {
      this.gridData = res;
    },
      (error) => {
        //Called when error
        this.error = error == 'Not Found' ? 'Incorrect API URL' : error;
        this.gridData = jsondata;
      });
  }

}
