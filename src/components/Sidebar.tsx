import React, { useEffect, useState } from 'react';

const sections = [
    { id: 'hero', label: '01 legend' },
    { id: 'world', label: '02 world' },
    { id: 'myth', label: '03 myth' }
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            // Find which section is currently in view
            const current = sections.find(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the top half of the screen
                    return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
                }
                return false;
            });

            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-[100] mix-blend-difference">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="relative group flex items-center justify-end"
                >
                    <span className={`text-xs uppercase tracking-[0.2em] transition-all duration-500 origin-right rotate-90 absolute right-8 whitespace-nowrap
            ${activeSection === section.id ? 'text-[#c5a059] font-bold' : 'text-gray-500 hover:text-white'}
          `}>
                        {section.label}
                    </span>
                    {/* Dot indicator */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 
            ${activeSection === section.id ? 'bg-[#c5a059] scale-125 shadow-[0_0_10px_#c5a059]' : 'bg-gray-600'}
          `} />
                </a>
            ))}
        </div>
    );
}