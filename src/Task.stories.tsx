import { Task } from './Task';

export default {
  title: 'Task Component',
  component: Task
}

const changeTaskStatusCallback = (taskId: string, isDone: boolean) => {

}

export const TaskBaseExample = (props: any) => {
  return <>
    <Task 
      task={{ id: '1', isDone: true, title: 'CSS' }}
      changeTaskStatus={changeTaskStatusCallback}
      changeTaskTitle={() => {}}
      removeTask={() => {}}
      todolistId={'todolistId1'}
    />
    <Task 
      task={{ id: '2', isDone: false, title: 'JS' }}
      changeTaskStatus={changeTaskStatusCallback}
      changeTaskTitle={() => {}}
      removeTask={() => {}}
      todolistId={'todolistId1'}
    />
  </>
}