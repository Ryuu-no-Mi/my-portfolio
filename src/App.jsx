import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
                <Header />
                <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
