"use client"
import React, { useState } from "react";
import debounce from "lodash.debounce";
import Artical from "./Articals";

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
    }, 100);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        debounceSearch(value);
        console.log(value);
    };

    return (
        <div className="flex justify-center flex-col">
            <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
                className="p-3 outline-none w-4/5 rounded-full"
            />
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
