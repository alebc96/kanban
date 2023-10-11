import { RiCloseFill, RiAddLine } from "react-icons/ri";
import { AddTaskProps } from "../../interfaces/AddTaskProps";

function AddTask( props: AddTaskProps) {

    const {showAddTask, setShowAddTask} = props

  return (
    <div className="bg-gray-900 fixed w-full h-full bg-opacity-40 flex flex-col justify-center items-center">
        <div className="absolute bg-[#2C2C38] p-5 text-gray-300 rounded-xl">
            <form className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between">
                    <h2 className="font-bold mb-3">Add Task</h2>
                    <RiCloseFill className="text-2xl cursor-pointer" onClick={ () => setShowAddTask(!showAddTask)}/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="font-semibold">Title</label>
                    <input type="text" id="title" placeholder="Title" className="p-2 bg-[#2C2C38] border border-[#3D3D49] rounded-md w-[320px] outline-none"/>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="font-semibold">Description</label>
                    <textarea placeholder="Description" id="description" className="p-2 bg-[#2C2C38] border border-[#3D3D49] rounded-md w-[320px] outline-none"/>
                </div>
                {/** Subtasks */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="subtask" className="font-semibold">Subtasks</label>

                    <div className="w-full flex justify-between items-center">
                        <input type="text" id="subtask" placeholder="Subtask" className="p-2 bg-[#2C2C38] border border-[#3D3D49] rounded-md w-[290px] outline-none"/>
                        {/** Btn delete subtask */}
                        <RiCloseFill className="text-2xl cursor-pointer"/>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <input type="text" id="subtask" placeholder="Subtask" className="p-2 bg-[#2C2C38] border border-[#3D3D49] rounded-md w-[290px] outline-none"/>
                        {/** Btn delete subtask */}
                        <RiCloseFill className="text-2xl cursor-pointer"/>
                    </div>
                    <button type="button" className="flex justify-center items-center rounded-full gap-3 font-semibold p-3 bg-gray-300 text-[#645FC6]"> <RiAddLine/> Add new subtask </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="font-semibold">Status</label>
                    <select name="status" id="status" className="bg-[#2C2C38] w-full outline-none border border-[#3D3D49] rounded-md p-2">
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <button type="button" className="flex justify-center items-center rounded-full gap-3 font-semibold p-3 text-gray-300 bg-[#645FC6]"> Create task </button>
            </form>
        </div>
    </div>
  )
}

export default AddTask