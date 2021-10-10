export enum IssueType {
  EPIC = 'Epic', BUG = 'Bug', STORY = 'Story', TASK = 'Task'
};

export enum IssueStatus {
  NEW = 'New', INPROGRESS = 'Inprogress', TESTING = 'Testing', DONE = 'Done'
};

export enum IssueSeverity {
  BLOCKER = 'Blocker', CRITICAL = 'Critical', MAJOR = 'Major', MINOR = 'Minor'
};

export interface Issue {
  id?: string,
  title: string,
  type: IssueType,
  status: IssueStatus,
  severity: IssueSeverity,
  description: string,
  reportedBy?: string,
  assignee?: string
  createdAt?: Date,
  updatedAt?: Date
};