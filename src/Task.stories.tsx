import { Task } from './Task';

export default {
  title: 'Task Component',
  component: Task
}

export const TaskBaseExample = (props: any) => {
  return <>
    <Task 
      task={{ id: '1', isDone: true, title: 'CSS' }}
    />
  </>
}