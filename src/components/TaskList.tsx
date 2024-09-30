import { getTaskRequest } from '../api/task';
import { useEffect, useState } from "react";
import { Task } from '../interfaces/task.interface';
import TaskItem from './TaskItem';

function TaskList(props: { lastLoaded: string }) {
  
  const {lastLoaded = new Date().toString()} = props;
  const [tasks, setTasks] = useState<Task[]>([])

  
const fetch = async () => {
  getTaskRequest()
    .then((response)=> response.json())
    .then((data) => setTasks(data))
}
const handleDelete = (taskId: string) => {
  setTasks(tasks.filter(task => task._id !== taskId)); // Actualizamos la lista eliminando la tarea
}
  useEffect(() => {
    fetch()
  }, [lastLoaded])

  const handleUpdate = () => {
    fetch();  // Recargamos la lista
  };
  

  return (
    <div>
      {
          tasks.map(task=>(
            <TaskItem task={task} key={task._id} onUpdate={handleUpdate} onDelete={handleDelete} /> // Pasamos la función onDelete
          ))}
    </div>
  )
}

export default TaskList