import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

function BoardCard() {

  const [showTask, setShowTask] = useState(false)

  return (
    <>
      <div className="w-full min-w-[300px] p-4 bg-[#2B2C37] min-h-fit flex flex-col justify-center rounded-lg shadow-lg cursor-pointer" onClick={()=> setShowTask(!showTask)}>
          <h2 className="text-gray-300">Build UI for onboarding flow</h2>
          <p className="text-gray-500">0 of 3 substasks</p>
      </div>

      {
        showTask === true
        ?
        <section className="fixed w-full h-full bg-gray-900 top-0 left-0 bg-opacity-30 flex flex-col justify-center items-center">
            <div className="bg-[#2C2C38] p-8 text-gray-300 max-w-[600px] flex flex-col gap-6 rounded-lg">
              <div className="w-full flex justify-end">
                <RiCloseFill className="cursor-pointer text-xl" onClick={()=>setShowTask(!showTask)}/>
              </div>
              <div className="font-semibold flex items-center justify-between gap-10">
                <h2>Research pricing points of various competitors and trial diferent business models</h2>
              </div>

              <div className="text-gray-500 leading-5">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magnam consequuntur dolorum? Quibusdam a est repellendus iusto odio repudiandae, inventore nulla, quaerat vero quam fugit tempora perspiciatis facere earum deleniti.</p>
              </div>

              {/** Subtasks */}

              <div className="flex flex-col w-full gap-2 text-sm">
                <div className="flex items-center bg-[#20212C] p-3 rounded-md gap-4">
                  <input type="checkbox" checked/>
                  <p className="line-through">Research competition pricing and business models</p>
                </div>

                <div className="flex items-center bg-[#20212C] p-3 rounded-md gap-4">
                  <input type="checkbox" checked/>
                  <p className="line-through">Outile a business model that works for our solution</p>
                </div>

                <div className="flex items-center bg-[#20212C] p-3 rounded-md gap-4">
                  <input type="checkbox"/>
                  <p className="">Research competition pricing and business models</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                  <label htmlFor="status" className="font-semibold">Status</label>
                  <select name="status" id="status" className="bg-[#2C2C38] w-full outline-none border border-[#3D3D49] rounded-md p-2">
                      <option value="todo">Todo</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                  </select>
              </div>
            </div>
          </section>
        : 
        ""
      }

    </>
  )
}

export default BoardCard