import { CaseTask } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { format } from 'date-fns'

type KanbanCardProps = {
  task: CaseTask
}

export const KanbanCard = ({ task }: KanbanCardProps) => {
  const priorityColors = {
    urgent: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  }

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id)
  }

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-sm border cursor-move"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{task.title}</h3>
        <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
          {task.priority}
        </Badge>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div>
          <span className="font-medium">{task.caseNumber}</span>
          <span className="mx-1">•</span>
          <span>{task.court}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{format(new Date(task.dueDate), 'MMM d')}</span>
          <Avatar className="h-6 w-6">
            <AvatarImage src="" />
            <AvatarFallback>
              {task.assignedTo.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}