// pages/blog/[slug].js
import { useRouter } from 'next/router';
import blogs from '../../data/blog.json';
import { getLayout } from '@/components/layouts/layout';
import Image from 'next/image';
import Card from '@/components/common/card';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const blog = blogs?.find((b) => b.slug === slug);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen mt-28">
            {/* Hero Section */}
            <div className="relative h-72 md:h-96 overflow-hidden">
                <div className="overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-b-lg animate-infinite-zoom"
                        width={1000}
                        height={100}
                        quality={100}
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-bold !font-gemsbuck  mb-4 text-white">
                        {blog.title}
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl italic text-center text-white !font-rodin">{blog?.content}</p>
                    </div>
                </div>
            </div>


            {/* Main Content Section */}
            <div className="container mx-auto py-12 px-6 md:px-10 lg:px-20">
                <div className=" rounded-lg p-8 md:p-12">
                    {/* Dynamic Sections */}
                    {blog?.sections?.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="text-3xl font-semibold mb-6 font-gemsbuck">
                                {section.section_title}
                            </h2>
                            {Array.isArray(section.section_content) ? (
                                <ul className="list-disc list-inside text-gray-700">
                                    {section.section_content.map((point, idx) => (
                                        <li className='font-rodin' key={idx}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700 leading-relaxed">
                                    {section.section_content}
                                </p>
                            )}

                            {/* Render Related Posts */}
                            {section.related_posts && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-8">
                                    {section.related_posts.map((relatedPost) => (
                                        <Card
                                            key={relatedPost.slug}
                                            variant="left"
                                            title={relatedPost.title}
                                            imageUrl={relatedPost.image}
                                            buttonLink={`/blog/${relatedPost.slug}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Author Section */}
                    <div className="flex items-center space-x-4 mb-10">
                        <img
                            src={blog?.author?.image}
                            alt="Author"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="text-lg font-semibold">{blog.author.name}</h4>
                            <p className="text-gray-500">{blog.author.role}</p>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className=" p-6 rounded-lg shadow">
                        <h3 className="text-primary font-semibold mb-4 text-3xl font-gemsbuck ">Comments</h3>
                        {blog?.comments?.length > 0 ? (
                            blog.comments.map((comment, index) => (
                                <p key={index} className="text-gray-700 italic mb-2 bg-gray-50 p-3">
                                    "{comment.comment}" - <span className="font-medium">{comment.author}</span>
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-700 italic">No comments yet.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetail;

BlogDetail.getLayout = getLayout;
