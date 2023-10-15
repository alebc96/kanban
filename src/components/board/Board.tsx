import BoardColumn from "./BoardColumn"
import { RiAddFill } from "react-icons/ri";

const columnName = ["todo", "doing", "done"];

function Board() {
  return (
    <div className="w-full h-full bg-[#20212C] flex justify-start overflow-y-auto board">
        <BoardColumn colName = {columnName[0]}/>
        <BoardColumn colName = {columnName[1]}/>
        <BoardColumn colName = {columnName[2]}/>


        <section className="px-8 py-4">

          {/** Create new column */}
          
          <div className="w-[260px] h-full flex justify-center items-center bg-[#22232E] rounded-xl shadow-lg shadow-[#22232E]">
            <button className="text-gray-500 font-bold flex justify-center items-center gap-3"> <RiAddFill/> New Column</button>
          </div>
        </section>
    </div>
  )
}

export default Board