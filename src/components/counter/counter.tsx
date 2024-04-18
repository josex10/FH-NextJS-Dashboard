'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne, initCounter } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CounterComponentProps{
  value: number;
}

export const CounterComponent = ({value}: CounterComponentProps) => {

  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.count);

  useEffect(()=>{
    dispatch(initCounter(value))
  }, [dispatch, value]);
  
  return (
    <>
        <span className="text-9xl">{count}</span>
        <div className="flex gap-2">
            <button className="bg-gray-900 text-slate-300 py-4 px-2 w-32 rounded-lg hover:bg-blue-500 text-lg font-bold" onClick={ () => dispatch( addOne() )}>+1</button>
            <button className="bg-gray-900 text-slate-300 py-4 px-2 w-32 rounded-lg hover:bg-blue-500 text-lg font-bold" onClick={ () => dispatch( substractOne() ) }>-1</button>
        </div>
    </>
  )
}
