import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container  mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="p-5 text-center text-4xl booking_title border-b-2 w-80 mx-auto capitalize">Our Blog</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Most Import Blog Are Here</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?nature?1" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">

                                <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">

                                <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">

                                <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">

                                <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;