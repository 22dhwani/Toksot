import Navbar from "../components/home/Navbar";
import SectionOne from "../components/home/Section-one";
import SectionThree from "../components/home/Section-three";
import SectionTwo from "../components/home/Section-two";
import SectionFour from "../components/home/Section-four";
import SectionFive from "../components/home/Section-five";
import SectionSix from "../components/home/Section-six";
import SectionSeven from "../components/home/Section-seven";
import SectionEight from "../components/home/Section-eight";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default Home;
