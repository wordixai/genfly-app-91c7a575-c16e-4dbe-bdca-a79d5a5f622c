import { useState } from 'react'
import { KanbanBoard } from '@/components/kanban/board'
import { Sidebar } from '@/components/ui/sidebar'
import { FileText, CalendarDays, Gavel, Bookmark, Search } from 'lucide-react'

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex h-screen">
      <Sidebar side="left" variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <SidebarInput 
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            prefix={<Search className="size-4" />}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <FileText />
                  <span>All Cases</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CalendarDays />
                  <span>Upcoming Hearings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Gavel />
                  <span>Court Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Bookmark />
                  <span>Bookmarked</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="flex-1 overflow-auto">
        <KanbanBoard searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default Index