import clsx from "clsx";
import {Marker} from "./Marker.jsx";

const Button = ({icon, href, children, containerClassname, onClick, markFill}) => {
    const Inner = () => (
        <>
        <span className="relative flex items-center px-4 g4 rounded-2xl
            inner-before min-h-[60px] group-hover:before:opacity-100 overflow-hidden">
            <span className="absolute -left-[1px]">
                <Marker markfill={markFill}/>
            </span>
            {icon && (
                <img src={icon} alt='circle' className='z-10 size-10 object-contain mr-5'/>
            )}
            <span className="relative z-2 text-p1 base-bold uppercase font-poppins">
                {children}
            </span>
            <span className="glow-before glow-after"/>
        </span>
        </>
    )
    return href ? (
        <a className={clsx("relative p-0.5 g5 shadow-500 rounded-2xl group", containerClassname)} href={href}>
            <Inner/>
        </a>
    ) : (
        <button className={clsx("relative p-0.5 g5 shadow-500 rounded-2xl group", containerClassname)}
                onClick={onClick}>
            <Inner/>
        </button>
    )
}
export default Button
