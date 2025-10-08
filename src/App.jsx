import './App.css'

import "./App.css";

function App() {
    return (
        <div className="min-h-screen  bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 font-sans">
            {/* HEADER */}
            <header className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
                <h1 className="text-5xl font-extrabold mb-3 tracking-tight">
                    🚀 Andrés Monserrate
                </h1>
                <p className="text-xl opacity-90">
                    Junior Java Developer | React & Vue
                </p>
            </header>

            {/* MAIN */}
            <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
                {/* ABOUT */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-400">
                        👋 About Me
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
                        I’m a passionate developer focused on{" "}
                        <strong>Java and Spring Boot</strong> for backend
                        development, and I love crafting intuitive UIs using{" "}
                        <strong>React</strong> and <strong>Vue</strong>. Always
                        learning, always building. ✨
                    </p>
                </section>

                {/* PROJECTS */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-blue-400 text-center">
                        💻 Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-blue-400 mb-2">
                                Employee Management App
                            </h3>
                            <p className="text-gray-300 mb-3">
                                A CRUD web app to manage employee data
                                efficiently with an elegant UI.
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                <strong>Tech:</strong> Java, Spring Boot, Vue,
                                MySQL
                            </p>
                            <a
                                href="https://github.com/tuusuario/empleados-app"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-300 font-medium"
                            >
                                🔗 View on GitHub
                            </a>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-blue-400 mb-2">
                                Task Tracker
                            </h3>
                            <p className="text-gray-300 mb-3">
                                A simple task manager with authentication and a
                                REST API backend.
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                <strong>Tech:</strong> Java, Spring Boot, HTML,
                                CSS, JS
                            </p>
                            <a
                                href="https://github.com/tuusuario/task-tracker"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-300 font-medium"
                            >
                                🔗 View on GitHub
                            </a>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                        📬 Contact
                    </h2>
                    <ul className="space-y-2 text-lg">
                        <li>
                            Email:{" "}
                            <a
                                href="mailto:andmonvil173.sl@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                andres@email.com
                            </a>
                        </li>
                        <li>
                            LinkedIn:{" "}
                            <a
                                href="https://es.linkedin.com/in/jaime-andr%C3%A9s-monserrate-villa-67a51b189"
                                className="text-blue-400 hover:underline"
                            >
                                linkedin.com/in/jaimmeandresmonserratevilla
                            </a>
                        </li>
                        <li>
                            GitHub:{" "}
                            <a
                                href="https://github.com/Ryuu-no-Mi"
                                className="text-blue-400 hover:underline"
                            >
                                github.com/Ryuu-no-Mi
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-700">
                © {new Date().getFullYear()} Andrés Monserrate — Built with
                React & TailwindCSS 💙
            </footer>
        </div>
    );
}

export default App;
