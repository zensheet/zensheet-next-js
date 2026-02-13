import { getPostData, getSortedPostsData } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReadingProgress from '@/components/blog/ReadingProgress';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import { useMDXComponents } from '@/mdx-components';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | ZenSheet Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.excerpt,
        image: post.coverImage ? `https://zensheet.id${post.coverImage}` : undefined, // Fallback image?
        url: `https://zensheet.id/blog/${post.slug}`,
        author: {
            '@type': 'Person',
            name: post.author,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReadingProgress />

            <div className="bg-gray-50 min-h-screen pb-12">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-flex items-center text-sm font-medium">
                        ← Back to Blog
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <article className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 md:p-10 border border-gray-100">
                            <header className="mb-8 border-b border-gray-100 pb-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags?.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center text-gray-600 text-sm md:text-base">
                                    <span className="font-semibold text-gray-900 mr-2">{post.author}</span>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </time>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-700 text-xs font-mono">{post.readingTime} read</span>
                                </div>
                            </header>

                            <div className="prose prose-lg prose-blue max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-lg">
                                <MDXRemote source={post.content} components={useMDXComponents({})} />
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-bold mb-4 text-gray-900">Share this article</h3>
                                <ShareButtons title={post.title} slug={post.slug} />
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="hidden lg:block lg:col-span-1">
                            <TableOfContents headings={post.headings} />
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
