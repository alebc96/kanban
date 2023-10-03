import { useState } from 'react';
import Board from './components/board/Board';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import { RiEyeLine } from "react-icons/ri";



function App() {

  const [showSideBar, setShowSideBar] = useState(true)

  return (
    <div className='flex h-full w-full relative'>
      <Sidebar showSideBar = { showSideBar } setShowSideBar = {setShowSideBar}/>
      <div className={`w-full flex flex-col ${showSideBar ? "pl-56" :  "pl-0"}`}>
        <Header/>
        <Board/>
      </div>

      {
        showSideBar === false
        ?
        <section className="pb-5 w-full absolute bottom-1 ">
          <button onClick={()=>setShowSideBar(!showSideBar)} className="text-gray-500 flex justify-center items-center pl-8 gap-3"><RiEyeLine/> Show Sidebar</button>
        </section>
        :
        <></>
      }

    </div>
  )
}

export default App
