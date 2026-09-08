import Navbar from "../components/Navbar.jsx";
import AboutHero from "../components/AboutHero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import WorkingProcess from "../components/WorkingProcess.jsx";
import Vision from "../components/Vision.jsx";
import Mission from "../components/Mission.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#090B20]">
      <Navbar />
      <main>
        <AboutHero />
        <WhoWeAre />
        <WorkingProcess />
        <Vision />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
