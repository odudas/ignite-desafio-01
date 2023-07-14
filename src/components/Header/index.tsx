import { ChangeEvent, FormEvent, useState } from 'react'

import { HeaderContainer, NewTaskForm } from './styles'

import logo from '../../assets/logo.svg'
import { PlusCircle } from '@phosphor-icons/react'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <NewTaskForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </NewTaskForm>
    </HeaderContainer>
  )
}
