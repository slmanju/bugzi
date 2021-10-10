import { Injectable } from '@angular/core';
import { Issue, IssueSeverity, IssueStatus, IssueType } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    {
      id: "EPIC-001",
      title: "As a user, I want to book an appointment",
      type: IssueType.EPIC,
      description: "As a user of the application, I want to make a booked appointment using REST API",
      severity: IssueSeverity.MAJOR,
      status: IssueStatus.NEW,
      reportedBy: "Dananji",
      createdAt: new Date()
    }
  ];

  constructor() { }

  findAll(): Issue[] {
    return this.issues;
  }

  findById(id: string): Issue | undefined {
    return this.issues.find(issue => issue.id === id);
  }

  save(issue: Issue) {
    console.log(issue);
    issue.id = new Date().getTime() + "";
    issue.reportedBy = "Dananji";
    this.issues.push(issue);
  }

}
