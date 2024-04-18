'use client'

import { useAppSelector } from "@/store";
import { SimpleWidget, SimpleWidgetProps } from "./SimpleWidget"
import { IoCafeOutline } from "react-icons/io5";


export const SimpleWidgetGrid = async() => {
    const widget: SimpleWidgetProps = {
        counter: useAppSelector(state => state.counter.count),
        icon: <IoCafeOutline/>,
        link: '/dashboard/counter',
        title: 'This is a title', 
        subtitle: 'This is a subtitle'
    }
    return (
        <>
            <SimpleWidget {...widget}/>
        </>
    )
}
