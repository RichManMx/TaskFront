import { CreateTask, Task } from "../interfaces/task.interface";
 
const API = "http://localhost:3000/api";

export const createTaskRequest = (task: CreateTask) =>
    fetch(`${API}/tasks`,{
        method:"POST",
        body: JSON.stringify(task),
        headers:{
            'Content-Type': 'application/json',
    },
});


// api/task.ts
export const updateTaskRequest = async (taskId: string, updatedTask: Partial<Task>) => {
  return await fetch(`${API}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
};

export const getTaskRequest = ()  =>fetch(`${API}/tasks`,{
  method:"GET",
    headers:{
        'Content-Type': 'application/json',
  },
});

export const deleteTaskRequest = (id: string)  =>fetch(`${API}/tasks/${id}`,{
  method:"DELETE",
    headers:{
        'Content-Type': 'application/json',
  },
});