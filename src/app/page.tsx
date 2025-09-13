"use client"
import HeroSearch from "./components/HeroSearch";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll ">
      <section className="snap-start h-screen">
        <HeroSearch />
      </section >
      <section className="snap-start h-screen">

      </section>
        
    </div>
  );
}
