import { useState } from "react"
import { ListaTareas } from "./ListaTareas"
export const TodoApp = () => {


    const [nuevaTarea, setNuevaTarea] = useState<string>('')

    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAskTask = () =>{
      if(nuevaTarea.trim()==='')return
      setListaTareas (tareaAnterior => [...tareaAnterior, nuevaTarea])
        setNuevaTarea('')
      
    }
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAskTask();
      }
    };

    const handleBorrarTarea = (index:number)=>{
      setListaTareas(tareas => tareas.filter((_,i) =>i!==index))
    } 
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input type="text"
            value={nuevaTarea}
            onChange={(e)=>{setNuevaTarea(e.target.value)}}
            onKeyDown={handleKeyPress}
            placeholder="Nueva Tarea" />
            <button onClick={handleAskTask}>Agregar✅</button>
        </div>
    <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}

