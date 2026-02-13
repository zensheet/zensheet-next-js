'use client';

import { Share2, Linkedin, Twitter, Facebook, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

type Props = {
    title: string;
    slug: string;
};

export default function ShareButtons({ title, slug }: Props) {
    const [copied, setCopied] = useState(false);
    const url = `https://zensheet.my.id/blog/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center space-x-4">
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="Share on LinkedIn"
            >
                <Linkedin size={20} />
            </a>

            <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-sky-50 text-sky-500 hover:bg-sky-100 transition-colors"
                aria-label="Share on Twitter"
            >
                <Twitter size={20} />
            </a>

            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                aria-label="Share on Facebook"
            >
                <Facebook size={20} />
            </a>

            <button
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors relative"
                aria-label="Copy link"
            >
                <LinkIcon size={20} />
                {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                        Copied!
                    </span>
                )}
            </button>
        </div>
    );
}
