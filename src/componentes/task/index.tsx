import { FormEvent, useState } from "react";
import TaskItem  from "./item";
import { useTaskStore } from "../store/task.ts";

// Trabalhando com cookie
import { useCookies } from 'react-cookie';

const Index = () => {
    // state que vai guardar o valor do novo estado e do novo cookie
    const [newTask, setNewTask] = useState('');

    // Capturando o array completo do estado e trazendo a função de adicionar nova tarefa
    const {tasks, addTask, changeSlogan} = useTaskStore()

    const [cookies, setCookie] = useCookies(['cookieTask']);

    // Capturando o valor do cookie
    const cookieValue = cookies['cookieTask'];

    //Inserindo a nova tarefa no estado do ZUSTAND
    const handleAddtask = (e: FormEvent) => {
        e.preventDefault();
        addTask(newTask) 
        
        // O Valor capturado é enviado para a função addTask, então o estado do ZUSTAND passa ter um valor novo, 
        // quando é adicionado outros valores o estado acrescenta os novos valores e o Cookie armazena os novos valores
        setCookie('cookieTask', ["Valor Enviado para o Estado: "+newTask, ...tasks ], { path: '/' })
        setNewTask('');
    }
    

  return (
    <main className="w-full h-screen flex items-center flex-col px-4 pt-10">
        
        <span className="flex pb-5 w-full justify-center text-red-500 self-start">
            Você tem {tasks.length} tarefas em aberto
        </span>

        <span className="flex pb-5 w-full justify-center text-blue-500 self-start">
            valor do Cookie: {cookieValue ? JSON.stringify(cookieValue) : "Cookie vazio"}
        </span>

        <form className="flex gap-4 rounded-md w-full max-w-[600px] mb-6" onSubmit={handleAddtask}>
            <input type="text" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma tarefa"
            className="rounded px-2 w-full h-8"
            />

 

            <button type="submit" className="bg-slate-100 px-4 rounded h-8">
                Adicionar
            </button>     
        </form>

        <button onClick={changeSlogan} className="px-4 rounded h-8 bg-blue-400 hover:bg-blue-600">
            Trocar Slogan
        </button>
        
        <TaskItem/>

        
 

    </main>
  )
}

export default Index
