import { CounterComponent } from "@/components/counter/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter Page', 
  description: 'This is the counter page of the Drink Code App'
}

interface apiCounterResponse{
  method: string, 
  count: number
}

const getApiCounter = async(): Promise<apiCounterResponse> => {
  const data = await fetch('http://localhost:3000/api/counter').then(res => res.json());
  return data;
}

const CounterPage = async() => {

  const {count} = await getApiCounter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <h1>Counter Page</h1>
        <CounterComponent value={count}/>
    </div>
  )
}

export default CounterPage