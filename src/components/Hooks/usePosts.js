import { useMemo } from "react";

export const useSortedPosts = (sort, posts) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (sort, posts, query) => {
    const sortedPosts = useSortedPosts(sort, posts)
    
    const sortedAndFilteredPosts = useMemo(() => {
        if (query) {
            return sortedPosts.filter(s => s.title.toLowerCase().includes(query.toLowerCase()))
        } return sortedPosts
    }, [query, sortedPosts])

    return sortedAndFilteredPosts
}