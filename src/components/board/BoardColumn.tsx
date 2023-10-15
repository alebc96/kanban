import BoardCard from "./BoardCard"

function BoardColumn({ colName } : {colName: string}) {
  return (
    <div className="flex flex-col min-w-[320px] items-start p-5 text-sm">
        <div className="flex justify-center items-center gap-3 pl-3 mb-3">
            <div className="w-2 h-2 bg-[#63C6E6] rounded-full"></div>
            <h2 className="text-gray-500 uppercase"> {colName} ( 4 )</h2>
        </div>

        <section className="flex flex-col gap-4">
            { /** ----->> Aqui irian las cards de la columna */ }
            <BoardCard/>
            <BoardCard/>
            <BoardCard/>
            <BoardCard/>
        </section>
    </div>
  )
}

export default BoardColumn