import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IssuesBoardComponent } from './issues/issues-board/issues-board.component';
import { NewIssueComponent } from './issues/new-issue/new-issue.component';
import { SearchIssuesComponent } from './issues/search-issues/search-issues.component';
import { ViewIssueComponent } from './issues/view-issue/view-issue.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-issue',
    component: NewIssueComponent
  },
  {
    path: 'issues',
    component: SearchIssuesComponent
  },
  {
    path: 'issues/:id',
    component: ViewIssueComponent
  },
  {
    path: 'board',
    component: IssuesBoardComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
