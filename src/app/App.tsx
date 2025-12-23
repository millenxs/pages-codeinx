import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { AIFeatures } from "./components/AIFeatures";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AIFeatures />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}