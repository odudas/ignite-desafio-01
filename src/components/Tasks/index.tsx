import { EmptyList, TaskList, TasksContainer, TasksHeader } from './styles'
import { Task } from '../Task'
import { ITask } from '../../App'
import { ClipboardText } from '@phosphor-icons/react'

interface TasksProps {
  tasks: ITask[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  return (
    <TasksContainer>
      <TasksHeader>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </TasksHeader>

      <TaskList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <EmptyList>
            <ClipboardText size={100} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </EmptyList>
        )}
      </TaskList>
    </TasksContainer>
  )
}
