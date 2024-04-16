import { CounterComponent } from "@/components/counter/counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Counter Page', 
  description: 'This is the counter page of the Drink Code App'
}

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <h1>Counter Page</h1>
        <CounterComponent/>
    </div>
  )
}

export default CounterPage