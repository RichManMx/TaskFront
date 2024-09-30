import { useState } from "react";
import { deleteTaskRequest, updateTaskRequest } from "../api/task";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
  onDelete: (taskId: string) => void;
  onUpdate: () => void;  // Nueva prop para notificar al componente padre sobre la actualización
}

function TaskItem({ task, onDelete, onUpdate }: Props) {
  const [loading, setLoading] = useState(false); // Estado para manejar el loader

  const deleteOperation = async () => {
    setLoading(true); // Mostrar el loader antes de comenzar
    try {
      await deleteTaskRequest(task._id);
      console.log("Deleted :)");
      onDelete(task._id);
    } finally {
      setLoading(false); // Ocultar el loader al terminar
    }
  };

  // Función para actualizar el estado `done`
  const handleUpdate = async () => {
    setLoading(true); // Mostrar el loader antes de la operación
    try {
      const updatedTask = { ...task, done: !task.done }; // Cambiar el estado `done`
      await updateTaskRequest(task._id, updatedTask);
      console.log(`Task ${task._id} updated to done: ${updatedTask.done}`);
      onUpdate();
    } finally {
      setLoading(false); // Ocultar el loader al terminar
    }
  };

  return (
    <div
      className="bg-gray-900 p-2 my-2 flex justify-between items-center hover:bg-gray-600 hover:cursor-pointer"
      key={task._id} >
        
    {loading ? (
        <div className="loader mr-2"></div> // Placeholder para el círculo giratorio
      ) : (
        <input type="checkbox" checked={task.done} readOnly className="mr-2" />
      )}
     

      <div className="flex-1">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>

      <div className="flex gap-x-2">
        <button onClick={handleUpdate} 
        disabled={loading}>
          {loading ? "Actualizando..." : "Actualizar"}    
        </button> 
        <button onClick={() => deleteOperation()} disabled={loading}>{loading ? "Eliminando..." : "Eliminar"}</button>
      </div>
    </div>
  );
}

export default TaskItem;
