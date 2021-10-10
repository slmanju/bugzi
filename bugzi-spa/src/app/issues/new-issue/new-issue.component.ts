import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueSeverity, IssueStatus, IssueType } from '../models/issue.model';

import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private issueService: IssueService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      severity: ['', Validators.required],
      description: ['', Validators.required],
      assignee: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.issueService.save({
        title: value.title,
        type: value.type,
        description: value.description,
        severity: value.severity,
        status: IssueStatus.NEW,
        createdAt: new Date()
      });
    }
  }

}
