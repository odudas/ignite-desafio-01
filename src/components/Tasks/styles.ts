import { styled } from 'styled-components'

export const TasksContainer = styled.section`
  margin: 0 auto;
  margin-top: 5.625rem;
  max-width: 46rem;
  padding: 0 1rem;
  width: 100%;
`
export const TasksHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  div {
    align-items: center;
    display: flex;
    gap: 0.8rem;
  }

  p {
    color: ${(props) => props.theme['--blue']};
    font-size: 0.875rem;
    font-weight: 700;
  }

  & > div:nth-of-type(2) > p {
    color: ${(props) => props.theme['--purple']};
  }

  span {
    background-color: ${(props) => props.theme['--gray-500']};
    border-radius: 99px;
    color: ${(props) => props.theme['--gray-200']};
    font-size: 0.75rem;
    font-weight: bold;
    padding: 3px 9px;
  }
`

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const EmptyList = styled.div`
  align-items: center;
  color: ${(props) => props.theme['--gray-300']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 4rem;
  text-align: center;

  svg {
    opacity: 0.3;
  }

  p {
    font-weight: bold;
  }
`
