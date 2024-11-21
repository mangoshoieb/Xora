import {Element} from "react-scroll";
import {faq} from "../constants/index.jsx"
import FaqItem from "../components/FaqItem.jsx";
const Faq = () => {
    const halfLength= Math.floor(faq.length/2)
    return (
        <section>
            <Element name="faq" classname="relative ">
                <div className="container z-2 relative py-28">
                    <div>
                        <h3 className='h3 max-w-640 mb-7 max-lg:max-w-md max-md:h5 text-p4 '>Curiosity didn&apos;t kill a cat,it gave it answers</h3>
                        <p className="body-1 max-lg:max-w-sm">You&apos;ve got questions , We&apos;ve got answers</p>
                    </div>
                    <div className="h-full w-0.5 bg-s2 absolute top-10 left-[calc(50%+1px)] faq-line_after -z-1"/>
                </div>
                <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
                    <div className="container flex gap-10 max-lg:block">
                        <div className="rounded-half flex justify-center items-center z-4
                        absolute -top-10 left-[calc(50%-40px)] size-20 border-2 border-s2 bg-s1">
                            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2"/>
                        </div>
                        <div className="relative flex-1 pt-24">
                            {faq.slice(0, halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={index}/>
                            ))}
                        </div>
                        <div className="relative flex-1 lg:pt-24">
                            {faq.slice(halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={index + halfLength}/>
                            ))}
                        </div>
                    </div>
                    <div className="h-full w-0.5 bg-s2 absolute top-0 left-[calc(50%+1px)] faq-line_after -z-1"/>
                </div>
            </Element>
        </section>
    )
}
export default Faq
