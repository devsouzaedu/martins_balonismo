import Hero from "@/components/Hero";
import NossoTrabalho from "@/components/NossoTrabalho";
import Depoimentos from "@/components/Depoimentos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NossoTrabalho />
      <Depoimentos />
    </main>
  );
}
