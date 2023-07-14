import { styled } from 'styled-components'

export const TaskContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme['--gray-700']};
  border: 1px solid ${(props) => props.theme['--gray-500']};
  border-radius: 8px;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
`

interface TitleTaskProps {
  isCompleted: boolean
}

export const TitleTask = styled.p<TitleTaskProps>`
  color: ${(props) =>
    props.isCompleted ? props.theme['--gray-300'] : props.theme['--gray-100']};
  font-size: 0.875rem;
  line-height: 1.18rem;
  margin-right: auto;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : '')};
`

export const CheckButton = styled.button`
  background: none;
  border: none;
  height: 1.125rem;
  width: 1.125rem;

  div {
    border: 2px solid ${(props) => props.theme['--blue']};
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  svg {
    background-color: ${(props) => props.theme['--purple']};
    border-radius: 50%;
    color: ${(props) => props.theme['--gray-100']};
    height: 100%;
    width: 100%;
  }
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme['--gray-300']};
`
