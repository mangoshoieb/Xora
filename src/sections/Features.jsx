import {Element} from "react-scroll";
import {details, features} from "../constants/index.jsx";
import Button from "../components/Button.jsx";


const Features = () => {
    return (
        <section>
            <Element name="features">
                <div className="container">
                    <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl feature-after md:overflow-hidden md:g7
                    max-md:flex-col max-md:rounded-none max-md:border-none max-md:gap-3">
                        {features.map(({id,icon,caption,text,title,button})=>(
                            <div className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50
                            max-md:flex-320 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:g7" key={id}>
                                <div className="w-full flex justify-start items-start">
                                    <div className="-ml-3 mb-12 flex justify-center items-center flex-col">
                                    <div className="w-0.5 bg-s3 h-16"/>
                                    <img src={icon} className="size-28 object-contain" alt={title}/>
                                    </div>
                                </div>
                                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                                <h2 className="text-p4 h3 max-w-400 mb-7 max-md:mb-6 max-md:h5">{title}</h2>
                                <p className="mb-11 max-md:mb-8 body-1 max-md:body-3">{text}</p>
                                <Button icon={button.icon}>{button.title}</Button>
                            </div>
                        ))}
                        <ul className="relative flex justify-around border-2 border-s3 rounded-7xl flex-grow px-[5%] max-md:hidden">
                            <div className="absolute top-[38%] left-0 right-0 w-full h-[1px] bg-s3/20 z-10"/>
                            {details.map(({id,title,icon})=>(
                                <li className=" relative pt-16 pb-14 px-4" key={id}>
                                    <div className="absolute top-8 bottom-0 left-1/2 h-full w-[1px] bg-s3/20 z-10"/>
                                    <div className="relative flex justify-center items-center mb-3 border-2 border-s2
                                    shadow-500 hover:border-s4 mx-auto transition-all duration-500 rounded-full size-22">
                                        <img src={icon} alt={title} className="size-17/20 object-contain z-20"/>
                                    </div>
                                    <h3 className="relative mx-auto text-center base-small my-0 z-2 max-w-36 uppercase">{title}</h3>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </section>
    )
}
export default Features
