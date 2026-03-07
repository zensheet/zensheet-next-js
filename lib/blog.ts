import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Lightweight type for blog listing (no full content)
export type BlogPostMeta = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    tags?: string[];
    coverImage?: string;
    readingTime: string;
};

export type BlogPost = BlogPostMeta & {
    content: string;
    headings: { level: number; text: string; slug: string }[];
};

// Lightweight: only reads frontmatter — used for listing pages
export function getSortedPostsData(): BlogPostMeta[] {
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true });
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Use gray-matter to read only the frontmatter — skip parsing the full content
            const { data, content } = matter(fileContents);
            const stats = readingTime(content);

            return {
                slug,
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || '',
                author: data.author || 'ZenSheet Team',
                tags: data.tags || [],
                coverImage: data.coverImage || null,
                readingTime: stats.text,
            } as BlogPostMeta;
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Full: reads frontmatter + content — used for individual post pages
export function getPostData(slug: string): BlogPost | undefined {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return undefined;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    // Extract headings for Table of Contents
    const headings: { level: number; text: string; slug: string }[] = [];
    const headingRegex = /^(#{2,3})\s+(.*)$/gm;
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const headingSlug = text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        headings.push({ level, text, slug: headingSlug });
    }

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags,
        coverImage: data.coverImage,
        readingTime: stats.text,
        content,
        headings,
    };
}
