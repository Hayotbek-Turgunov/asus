import './app.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Businnes from './Component/Businnes/Businnes'
import ColBannerCard from './Component/ColBannerCard/ColBannerCard'
import EventsCard from './Component/EventsCard/EventsCard'
import Aside from './Component/Aside/Aside'
import Footer from './Component/Footer/Footer'

function App() {
    return (
        < div>
            <Navbar />
            <Hero />
            <Businnes />
            <ColBannerCard />
            <EventsCard />
            <Aside />
            <Footer />
        </div>
    );
}


export default App