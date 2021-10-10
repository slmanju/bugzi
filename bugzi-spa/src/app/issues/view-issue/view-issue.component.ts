import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../models/issue.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.scss']
})
export class ViewIssueComponent implements OnInit {

  issue: Issue | undefined;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private issueService: IssueService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parameter => {
      console.log(parameter);
      console.log(parameter.id);
      this.issue = this.issueService.findById(parameter.id);
      if (this.issue) {
        this.form = this.fb.group({
          title: [this.issue.title, Validators.required],
          type: [this.issue.type, Validators.required],
          severity: [this.issue.severity, Validators.required],
          status: this.issue.status,
          reportedBy: [this.issue.reportedBy],
          createdAt: [this.issue.createdAt],
          description: [this.issue.description, Validators.required],
          assignee: ['']
        });
      }
    });
  }

}
