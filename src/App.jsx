import Header from "./sections/header.jsx";
import Hero from "./sections/hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimoniols from "./sections/Testimoniols.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";


const App = () => {
    return (
        <main className="overflow-hidden">
            <Header/>
            <Hero/>
            <Features/>
            <Pricing/>
            <Faq/>
            <Testimoniols/>
            <Download/>
            <Footer/>
        </main>
    )
}
export default App
