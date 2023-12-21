"use client"
import React, { useState } from "react";
import debounce from "lodash.debounce";
import Artical from "./Articals";
import Image from "next/image";

interface Post {
    slug: string;
    date: string;
    title: string;
    description: string;
}

interface SearchBarProps {
    posts: Post[];
}

const MAX_DISPLAY = 5;

const SearchBar: React.FC<SearchBarProps> = ({ posts }) => {
    const [setsearchCheck, setSetsearchCheck] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Post[]>([]);

    const debounceSearch = debounce((search: string) => {
        if (posts) {
            const results = posts.filter((post) =>
                post.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(results);
            setSetsearchCheck(results.length > 0);
        }
    }, 800);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        debounceSearch(value);
        console.log(value);
    };

    return (
        <div className="flex justify-center flex-col ">

            <div className="flex justify-center  ">
                <div className="w-4/5 flex   rounded-full p-2 bg-gray-400/20">

                    <Image alt="ssearchIcon" width={30} height={30} src='/search.svg'/>
                    <input
                        onChange={handleSearchChange}
                        type="text"
                        placeholder="Search"
                        className="p-1 outline-none bg-transparent"
                    />
                </div>
            </div>

            {setsearchCheck ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {searchResults?.length > 0 &&
                        searchResults.map((post) => (
                            <li key={post.slug} className="py-12">
                                <Artical {...post} />
                            </li>
                        ))}
                </ul>
            ) : (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((post: any) => (
                        <li key={post.slug} className="py-12">
                            <Artical {...post} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
