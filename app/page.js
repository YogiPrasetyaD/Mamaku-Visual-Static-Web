import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col relative min-h-screen bg-white overflow-x-hidden font-inter">
      <Navbar />
      <HeroSection />
    </div>
  );
}
