import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
    title: 'Blog | ZenSheet',
    description: 'Insights, tutorials, and updates about productivity, data management, and logistics.',
};

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">ZenSheet Blog</h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Tips, tutorials, and insights to help you uncomplicate your work and manage data better.
            </p>

            <div className="grid gap-8">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white">
                            <Link href={`/blog/${post.slug}`} className="block group">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                    <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>{post.readingTime} read</span>
                                </div>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="text-blue-600 font-medium group-hover:underline">
                                    Read more →
                                </span>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-12">Coming soon!</p>
                )}
            </div>
        </div>
    );
}
