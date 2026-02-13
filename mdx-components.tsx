import type { MDXComponents } from 'mdx/types';
import DownloadEbookCTA from '@/components/blog/DownloadEbookCTA';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-700">{children}</h4>
        ),
        p: ({ children }) => (
            <p className="text-lg leading-relaxed mb-4 text-gray-700">{children}</p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
        ),
        li: ({ children }) => (
            <li className="text-lg leading-relaxed">{children}</li>
        ),
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        DownloadEbookCTA,
        ...components,
    };
}
