import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme['--gray-900']};
  display: flex;
  height: 12.5rem;
  justify-content: center;
  position: relative;
`

export const NewTaskForm = styled.form`
  bottom: calc(-3.375rem / 2);
  display: flex;
  gap: 0.5rem;
  height: 3.375rem;
  max-width: 46rem;
  padding: 0 1rem;
  position: absolute;
  width: 100%;

  input {
    background-color: ${(props) => props.theme['--gray-700']};
    border: 1px solid ${(props) => props.theme['--gray-900']};
    border-radius: 8px;
    color: ${(props) => props.theme['--gray-100']};
    flex: 1;
    font-size: 1rem;
    height: 100%;
    padding: 0 1rem;

    &::placeholder {
      color: ${(props) => props.theme['--gray-300']};
    }
  }

  button {
    align-items: center;
    background-color: ${(props) => props.theme['--blue-dark']};
    color: ${(props) => props.theme['--gray-100']};
    border: none;
    border-radius: 8px;
    display: flex;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: bold;
    height: 100%;
    padding: 0 1rem;
  }
`
