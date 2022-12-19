import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BottomNews from "../components/sections/BottomNews";
import Discover from "../components/sections/Discover";
import Entreprenuer from "../components/sections/Entreprenuer";
import Giving from "../components/sections/Giving";
import News from "../components/sections/News";

export default function Home() {
  return (
    <>
   <Navbar />
   <Entreprenuer />
   <News />
   <BottomNews />
   <Discover />
   <Giving />
   <Footer />
    </>
  )
}
