import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Entreprenuer from "../components/sections/Entreprenuer";
import NewsLower from "../components/sections/NewLower";
import News from "../components/sections/News";

export default function Home() {
  return (
    <>
   <Navbar />
   <Entreprenuer />
   <News />
   <NewsLower />
   <Footer />
    </>
  )
}
