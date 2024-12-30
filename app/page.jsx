import Image from "next/image";
import Hero from "./_components/Hero";
import DesignContainer from "./_components/DesignContainer";
export default function Home() {
  return (
    <div className="grid">
   <Hero/>
   <DesignContainer/>
    </div>
  );
}
