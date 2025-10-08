import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
                <Header />
                <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
