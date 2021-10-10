import { Component, OnInit } from '@angular/core';
import { Issue } from '../models/issue.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-search-issues',
  templateUrl: './search-issues.component.html',
  styleUrls: ['./search-issues.component.scss']
})
export class SearchIssuesComponent implements OnInit {

  issues: Issue[];
  displayedColumns: string[] = [ 'title', 'type', 'severity', 'description', 'reportedBy', 'action' ];
  dataSource: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issues = this.issueService.findAll();
    this.dataSource = this.issues;
  }

}
