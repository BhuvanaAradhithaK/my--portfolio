import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-red-950 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* Subtle section divider */}
        <div className="w-full flex items-center justify-center my-4 opacity-40">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-zinc-800" />
          <span className="mx-3 text-[10px] text-zinc-600">❖</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>

        {/* 3. About Section */}
        <About />

        {/* Subtle section divider */}
        <div className="w-full flex items-center justify-center my-4 opacity-40">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-zinc-800" />
          <span className="mx-3 text-[10px] text-zinc-600">❖</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>

        {/* 4. Projects Section */}
        <Projects />

        {/* Subtle section divider */}
        <div className="w-full flex items-center justify-center my-4 opacity-40">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-zinc-800" />
          <span className="mx-3 text-[10px] text-zinc-600">❖</span>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
