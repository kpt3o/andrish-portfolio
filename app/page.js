import CanvasBackground from "@/components/canvas/CanvasBackground";
import AiTools from "@/components/sections/AiTools";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Cybersecurity from "@/components/sections/Cybersecurity";
import Postproduction from "@/components/sections/Postproduction";
import DevOps from "@/components/sections/DevOps";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Contenedor fijo para que el 3D se quede clavado en el fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasBackground />
      </div>
      
      <SmoothScroll>
        <Nav />
        <main className="relative z-10">
          <Hero />
          <AiTools />
          <Cybersecurity />
          <Postproduction />
          <DevOps />
          <About />
          <Contact />
          <footer className="mx-auto max-w-6xl px-6 py-12 text-xs text-ink-faint sm:px-10">
            © {new Date().getFullYear()} Andrish Landau Miranda.
          </footer>
        </main>
      </SmoothScroll>
    </>
  );
}