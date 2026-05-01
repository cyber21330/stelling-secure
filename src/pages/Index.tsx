import { CustomCursor } from "@/components/stelling/CustomCursor";
import { Navbar } from "@/components/stelling/Navbar";
import { Hero } from "@/components/stelling/Hero";
import { Services } from "@/components/stelling/Services";
import { WhyUs } from "@/components/stelling/WhyUs";
import { Process } from "@/components/stelling/Process";
import { Stats } from "@/components/stelling/Stats";
import { FAQ } from "@/components/stelling/FAQ";
import { Contact } from "@/components/stelling/Contact";
import { Footer } from "@/components/stelling/Footer";
import { StickyCTA } from "@/components/stelling/StickyCTA";
import { WhatsAppFab } from "@/components/stelling/WhatsAppFab";

const Index = () => {
  return (
    <div style={{ background: "#07080E", color: "#E6E3DC", minHeight: "100vh" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
