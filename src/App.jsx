import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIBuild from "./components/WhatIBuild";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <WhatIBuild />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </>

    );
}