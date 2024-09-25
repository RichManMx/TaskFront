import TaskFomr from "./components/TaskFomr"
import TaskList from "./components/TaskList"

function App() {
  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center text-white">
      <div className="bg-gray-950 p-4 w-3/5">
      <h1 className="text-3xl font-bold text-center block my-2">Task APP</h1>
      <TaskFomr></TaskFomr>
      <TaskList></TaskList>
    
      </div>
    </div>
  )
}

export default App