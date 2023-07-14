import { CheckCircle, Trash } from '@phosphor-icons/react'

import { CheckButton, DeleteButton, TaskContainer, TitleTask } from './styles'
import { ITask } from '../../App'

interface TaskProps {
  task: ITask
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <TaskContainer>
      <CheckButton onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle /> : <div />}
      </CheckButton>

      <TitleTask isCompleted={task.isCompleted}>{task.title}</TitleTask>

      <DeleteButton onClick={() => onDelete(task.id)}>
        <Trash size={25} />
      </DeleteButton>
    </TaskContainer>
  )
}
