import { useContext } from "react";
import { Mail, Briefcase, Linkedin, Github } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Contact() {
    const { lang } = useContext(LanguageContext);
    const { contact } = content[lang];

    const links = [
        {
            icon: Mail,
            label: contact.email,
            href: "mailto:andmonvil173.sl@gmail.com",
            text: "andmonvil173.sl@gmail.com",
        },
        {
            icon: Briefcase,
            label: contact.phone,
            href: "tel:622905291",
            text: "+34 622 90 52 91",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/jaime-andr%C3%A9s-monserrate-villa-67a51b189/",
            text: "LinkedIn",
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/Ryuu-no-Mi",
            text: "GitHub",
        },
    ];

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {contact.title}
                    </span>
                </h2>
                <p className="text-gray-400 text-lg mb-12">
                    {contact.subtitle}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
                        >
                            <link.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold text-gray-200 mb-1">
                                {link.label}
                            </h3>
                            <p className="text-sm text-gray-400">{link.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
