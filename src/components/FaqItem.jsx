import {useState} from "react";
import clsx from "clsx";
import {SlideDown} from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
const FaqItem = ({item,index}) => {
    const [activeId, setActiveId] = useState(null);
    const active = activeId === item.id;
    return (
        <div className="relative z-2 mb-16">
            <div className="group relative cursor-pointer flex justify-between items-center gap-10 px-7"
                 onClick={()=> {
                     setActiveId(activeId === item.id ? null : item.id)
                 }}>
                <div className="flex-1">
                    <div className="text-p3 mb-1.5 max-lg:hidden small-compact">
                        {index+1 < 10 ? "0":""}
                        {index+1}
                    </div>
                    <div className={clsx("h6 transition-colors duration-500 text-p4 max-md:flex max-md:min-h-20 max-md:items-center"
                        ,active && "max-lg:text-p1")}>
                        {item.question}
                    </div>
                </div>
                <div className={clsx("faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 transition-all duration-500 shadow-400 group-hover:border-s4"
                    ,active && "before:bg-p1 after:bg-p1 after:rotate-0")}>
                    <div className="size-11/12 g4 rounded-full shadow-300"/>
                </div>
            </div>
            <SlideDown>
                {activeId === item.id && (<div className="body-3 py-3.5 px-7">{item.answer}</div>)}
            </SlideDown>
            <div className={clsx("absolute g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 "
                ,active && 'opacity-100')}>
                <div className="g4 rounded-3xl -z-1 absolute inset-0.5 "/>
                <div className="absolute top-0 left-8 w-40 h-0.5 gb-p1"/>
            </div>
        </div>
    )
}
export default FaqItem
