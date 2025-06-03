import { KanbanCard } from './card'
import { CaseTask } from '@/types'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

type KanbanColumnProps = {
  title: string
  tasks: CaseTask[]
  onTaskMove: (taskId: string, newStatus: string) => void
}

export const KanbanColumn = ({ title, tasks, onTaskMove }: KanbanColumnProps) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId')
    onTaskMove(taskId, title.toLowerCase().replace(' ', '-'))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div 
      className="bg-gray-50 rounded-lg p-4"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">{tasks.length} tasks</span>
      </div>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}