import { RiMore2Fill, RiAddFill } from "react-icons/ri";


function Header() {
  return (
    <header className="flex items-center justify-between bg-[#2B2C37] h-20 w-full px-10 text-gray-300">
        <section>
            <h2 className="text-xl">Platform Launch</h2>
        </section>

        <section className="flex justify-center items-center gap-7"> 
            <button className="flex justify-center items-center gap-3 bg-[#645FC6] px-3 py-2 rounded-full font-bold"><RiAddFill/> Add New Task</button>
            <RiMore2Fill className="cursor-pointer text-xl"/>
        </section>
    </header>
  )
}

export default Header