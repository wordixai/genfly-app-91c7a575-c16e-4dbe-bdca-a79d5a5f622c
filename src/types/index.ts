export interface CaseTask {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  caseNumber: string
  court: string
  priority: 'urgent' | 'high' | 'medium' | 'low'
  dueDate: string
  assignedTo: string
}