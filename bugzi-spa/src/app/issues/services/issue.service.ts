import { Injectable } from '@angular/core';
import { Issue, IssueSeverity, IssueStatus, IssueType } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    {
      id: "EPIC-001",
      title: "An Epic 01",
      type: IssueType.EPIC,
      description: "A description 01",
      severity: IssueSeverity.MAJOR,
      status: IssueStatus.INPROGRESS,
      reportedBy: "Dananji",
      createdAt: new Date()
    },
    {
      id: "EPIC-002",
      title: "An Epic 02",
      type: IssueType.EPIC,
      description: "A description 02",
      severity: IssueSeverity.MAJOR,
      status: IssueStatus.INPROGRESS,
      reportedBy: "Dananji",
      createdAt: new Date()
    },
    {
      id: "EPIC-003",
      title: "An Epic 03",
      type: IssueType.EPIC,
      description: "A description 03",
      severity: IssueSeverity.MAJOR,
      status: IssueStatus.TESTING,
      reportedBy: "Dananji",
      createdAt: new Date()
    },
    {
      id: "EPIC-004",
      title: "An Epic 04",
      type: IssueType.EPIC,
      description: "A description 04",
      severity: IssueSeverity.MAJOR,
      status: IssueStatus.NEW,
      reportedBy: "Dananji",
      createdAt: new Date()
    },
    {
      id: "EPIC-005",
      title: "An Epic 05",
      type: IssueType.EPIC,
      description: "A description 05",
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
