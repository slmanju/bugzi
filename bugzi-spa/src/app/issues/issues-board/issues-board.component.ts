import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Issue, IssueStatus } from '../models/issue.model';
import { IssueService } from '../services/issue.service';

@Component({
  selector: 'app-issues-board',
  templateUrl: './issues-board.component.html',
  styleUrls: ['./issues-board.component.scss']
})
export class IssuesBoardComponent implements OnInit {

  issues: Issue[] = [];
  todoList: Issue[] = [];
  inprogressList: Issue[] = [];
  testingList: Issue[] = [];
  doneList: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issues = this.issueService.findAll();
    this.todoList = this.issues.filter(issue => issue.status === IssueStatus.NEW);
    this.inprogressList = this.issues.filter(issue => issue.status === IssueStatus.INPROGRESS);
    this.testingList = this.issues.filter(issue => issue.status === IssueStatus.TESTING);
    this.doneList = this.issues.filter(issue => issue.status === IssueStatus.DONE);
  }

  drop(event: CdkDragDrop<Issue[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
