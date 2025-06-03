import { useState } from 'react'
import { KanbanColumn } from './column'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { CaseTask } from '@/types'

export const KanbanBoard = ({ searchTerm }: { searchTerm: string }) => {
  const [tasks, setTasks] = useState<CaseTask[]>([
    {
      id: '1',
      title: 'Review Smith v. Jones',
      description: 'Analyze new motion to dismiss',
      status: 'todo',
      caseNumber: 'CV-2023-0456',
      court: 'Superior Court',
      priority: 'high',
      dueDate: '2023-12-15',
      assignedTo: 'Jane Doe'
    },
    {
      id: '2',
      title: 'File response brief',
      description: 'Opposition to motion for summary judgment',
      status: 'in-progress',
      caseNumber: 'CV-2023-0789',
      court: 'District Court',
      priority: 'urgent',
      dueDate: '2023-12-05',
      assignedTo: 'John Smith'
    },
    {
      id: '3',
      title: 'Prepare discovery requests',
      description: 'Draft interrogatories and document requests',
      status: 'review',
      caseNumber: 'CV-2023-1023',
      court: 'Federal Court',
      priority: 'medium',
      dueDate: '2023-12-20',
      assignedTo: 'Jane Doe'
    },
    {
      id: '4',
      title: 'Schedule depositions',
      description: 'Coordinate with opposing counsel',
      status: 'done',
      caseNumber: 'CV-2023-0567',
      court: 'Superior Court',
      priority: 'low',
      dueDate: '2023-11-30',
      assignedTo: 'John Smith'
    }
  ])

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.caseNumber.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const columns = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'review', title: 'Review' },
    { id: 'done', title: 'Completed' }
  ]

  const moveTask = (taskId: string, newStatus: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ))
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Case Management Board</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map(column => (
          <KanbanColumn
            key={column.id}
            title={column.title}
            tasks={filteredTasks.filter(task => task.status === column.id)}
            onTaskMove={moveTask}
          />
        ))}
      </div>
    </div>
  )
}