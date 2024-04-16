'use client'
import { useState } from "react";

export const CounterComponent = () => {

const [counter, setCounter ] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSub = () => {
    (counter > 0) &&  setCounter(counter - 1)
  }
  return (
    <>
        <span className="text-9xl">{counter}</span>
        <div className="flex gap-2">
            <button className="bg-gray-900 text-slate-300 py-4 px-2 w-32 rounded-lg hover:bg-blue-500 text-lg font-bold" onClick={handleAdd}>+1</button>
            <button className="bg-gray-900 text-slate-300 py-4 px-2 w-32 rounded-lg hover:bg-blue-500 text-lg font-bold" onClick={handleSub}>-1</button>
        </div>
    </>
  )
}
