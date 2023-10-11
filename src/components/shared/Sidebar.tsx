import { RiListCheck, RiDashboardLine, RiAddCircleLine, RiSunLine, RiMoonLine, RiEyeOffLine } from "react-icons/ri";
import SidebarProps from "../../interfaces/SideBarProps";

function Sidebar( props: SidebarProps) {

    const { setShowSideBar, showSideBar } = props
    

  return (
    <nav className={ `w-56 h-full bg-[#2B2C37] flex flex-col justify-between fixed ${ showSideBar ? "left-0" : "-left-full" } transition-all` }>
        <div>
            <div className="flex justify-center items-center pt-5 gap-2">
                <RiListCheck className="text-[#645FC6] bold text-3xl bold font-bold"/>
                <h1 className="text-gray-300 bold text-3xl font-bold">kanban</h1>
            </div>
            <div className="w-full mt-10 text-center">
                <span className="uppercase text-gray-500 text-sm">all boards(8)</span>
            </div>
            <section className="flex flex-col mt-8 gap-2 text-sm">
                <div className="ps-8 flex w-[95%] justify-start items-center bg-[#645FC6] p-3 gap-3 text-gray-300 rounded-e-full">
                    <RiDashboardLine/>
                    <a href="#">Platform Launch</a>
                </div>

                <div className="ps-8 flex w-[95%] justify-start items-center  p-3 gap-3 text-gray-500 hover:bg-[#645FC6] hover:text-gray-300 hover:rounded-e-full">
                    <RiDashboardLine/>
                    <a href="#">Marketing Plan</a>
                </div>

                <div className="ps-8 flex w-[95%] justify-start items-center  p-3 gap-3 text-gray-500 hover:bg-[#645FC6] hover:text-gray-300 hover:rounded-e-full">
                    <RiDashboardLine/>
                    <a href="#">Roadmap</a>
                </div>

                <div className="ps-8 flex w-[95%] justify-start items-center  p-3 gap-3 text-gray-500 hover:bg-[#645FC6] hover:text-gray-300 hover:rounded-e-full">
                    <RiDashboardLine/>
                    <a href="#">Platform Launch</a>
                </div>

                <button className="ps-8 flex w-[95%] justify-start items-center  p-3 gap-3 text-[#645FC6] ">
                    <RiAddCircleLine/>
                    Create new board
                </button>
            </section>
        </div>
        
        <div className="flex flex-col gap-3">
            <section className="bg-[#20212C] w-[80%] flex my-0 mx-auto rounded-md">
                <div className="flex justify-center items-center text-gray-500 text-xl p-4 m-auto gap-2 ">
                    <RiSunLine/>
                    <input type="checkbox" id="btn-switch"/>
                    <label htmlFor="btn-switch" className="lbl-bar"></label>
                    <RiMoonLine/>
                </div>
            </section>

            <section className="pb-5 w-full">
                <button onClick={() => setShowSideBar(!showSideBar)} className="text-gray-500 flex justify-center items-center pl-8 gap-3"><RiEyeOffLine/> Hide sidebar</button>
            </section>
        </div>    
    </nav>

  )
}

export default Sidebar