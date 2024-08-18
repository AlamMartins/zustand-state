import React from 'react'
import {useTaskStore} from "../store/task.ts"

const Item = () => {

  const {tasks, editTask, removeTask} = useTaskStore()


  return (
    <ul className="flex flex-col gap-6 w-full max-w-[600px]">

    {tasks.map((tasks) => (
            <li className="bg-gray-600 w-full rounded p-2 flex items-center justify-between relative" key={tasks.id}>

            <p className="break-all text-white">{tasks.text}</p>
   
           <div className="flex gap-2 absolute -bottom-4 right-0">
             
               <button className="bg-red-500 px-2 rounded text-white font-medium"
               onClick={() => removeTask(tasks.id)}
               >
                 Excluir
               </button>
   
               <button className="bg-green-500 px-2 text-white rounded font-medium"
               onClick={() => editTask(tasks.id, prompt("Novo nome da tarefa:", tasks.text || tasks.text))}>
                 Editar
               </button>
   
           </div>
   
         </li>
    ))}

    </ul>
  )
}

export default Item


