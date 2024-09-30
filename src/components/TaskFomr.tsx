import { ChangeEvent, FormEvent, useState } from "react"
import { createTaskRequest } from "../api/task";


function TaskFomr(props: {
  refreshList: (lastLoaded: string) => void
}) {
  const [ task, setTask] = useState({
    title:"",
    description:"",
    done: false,
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({...task, [e.target.name]: e.target.value});

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(task);
    const res = await createTaskRequest(task)
    const data = await res.json()
    props.refreshList(new Date().toString())
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
         onChange={handleChange}
         type="text"
         name="title"
         className="border-2 rounded-lg border-gray-700 bg-zinc-800 block w-full my-2"
         placeholder="Write a title" />
        <textarea
           onChange={handleChange}
           className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
           name="description"  
           rows={3}
           placeholder="Write a description" ></textarea>
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input className="h-5 w-5  text-indigo-500" type="checkbox"
          onChange={(e)=> setTask({... task, done: !task.done})}/>
          <span>Done</span>
        </label>
        <button
        className="bg-indigo-500 rounded-lg px-3 block py-2 w-full "
        >Save</button>
      </form>
    </div>
  )
}

export default TaskFomr