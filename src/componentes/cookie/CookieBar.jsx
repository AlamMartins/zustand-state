 
import { useCookies } from 'react-cookie';

import {useTaskStore} from "../store/task.ts"

const CookieBar = () => {
  const [cookies, setCookie] = useCookies(['cookieTask']);
 

  const {tasks} = useTaskStore()

  const handleAccept = (acceptedByScrolling) => {
    if (acceptedByScrolling) {
      // O usuário aceitou rolando a página
      console.log('Aceito por rolagem');
    } else {
      // O usuário clicou no botão de aceitar
      console.log('Aceito por clique');
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 pb-20 justify-center text-center text-white">
        
      <p>Este web site utiliza cookies para garantir que voce tenha a melhor experiencia.</p>

        {/* Atribuindo valores aos cookies */}
      <button onClick={() => setCookie('cookieTask', tasks.length , { path: '/' })} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 ">
        Accept
      </button>

    </div>
  );
};

export default CookieBar;