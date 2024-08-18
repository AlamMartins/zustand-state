import './App.css'

import TaskId from './componentes/task/index'
  import {useTaskStore} from "./componentes/store/task.ts"

// import CookieBar from "./componentes/cookie/CookieBar.jsx"

function App() {

  const {slogan} = useTaskStore()

  return (
    <>

      {/* <CookieBar/> */}

      <h1 className="text-center text-3xl pt-20 text-white">{slogan}</h1>
      <TaskId/>
    </>
  )
}

export default App

