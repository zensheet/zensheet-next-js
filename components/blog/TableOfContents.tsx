'use client';

import { useEffect, useState } from 'react';

type Heading = {
    level: number;
    text: string;
    slug: string;
};

type Props = {
    headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0% 0% -80% 0%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.slug);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.slug);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto p-4 hidden lg:block">
            <h4 className="text-gray-900 font-bold mb-4 uppercase text-sm tracking-wider">
                On This Page
            </h4>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.slug}
                        style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                    >
                        <a
                            href={`#${heading.slug}`}
                            className={`block transition-colors duration-200 border-l-2 pl-3 ${activeId === heading.slug
                                    ? 'border-blue-600 text-blue-600 font-medium'
                                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.slug)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                                setActiveId(heading.slug);
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
