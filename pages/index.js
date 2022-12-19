import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BottomNews from "../components/sections/BottomNews";
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
   <Giving />
   <Footer />
    </>
  )
}
