import type { PostEdge } from '@site/types/Post';
import BlogCard from '@site/components/BlogCard';

type PostListProps = {
    posts: PostEdge[];
    pageList: number[];
    currentPage: number;
    nextPage?: number,
    previousPage?: number,
};

const PostList: React.FC<PostListProps> = ({ posts, pageList, currentPage, nextPage, previousPage }) => {
    return (
        posts.length > 0 ? (
            <div className='flex-grow'>
            <div className='columns-1 md:columns-2 gap-6 space-y-6 p-4 lg:px-16 xl:px-32'>
                {posts.map((postEdge) => {
                    const post = postEdge.node;

                    return(
                        <div key={post.id}>
                            <BlogCard post={post}   />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-3">
                <a className={`${previousPage ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} bg-(--color-tertiary-container) h-12 my-4 py-3 px-5 rounded-full`} href={`/blog/${currentPage - 1}`}>
                    <p className='text-(--color-tertiary-on-container)'>&lt; Previous</p>
                </a>
                {pageList.map((page) => (
                    <a className={`${currentPage == page ? 'bg-(--color-tertiary)' : 'bg-(--color-background)'} h-12 my-4 rounded-full px-5 py-3`} href={`/blog/${page}`}>
                        <p className={`${currentPage == page ? 'text-(--color-on-tertiary)' : 'text-(--color-tertiary)'}`}>{page}</p>
                    </a>
                ))}
            <a className={`${nextPage ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} bg-(--color-tertiary-container) h-12 my-4 py-3 px-5 rounded-full`} href={nextPage ? `/blog/${Number(currentPage) + 1}` : "#"}>
                <p className='text-(--color-tertiary-on-container)'>Next page &gt;</p>
            </a>
        </div>
    </div>
        ) : (
            <div className="lg:px-16 xl:px-32 flex-grow">
                <div className="bg-(--color-error-container) w-full p-4 rounded-2xl">
                    <p className='text-(--color-error-on-container)'>
                    No posts available at the moment. This could be due to several reasons, such as the host being temporarily offline. Please try again later.
                    </p>
                </div>
                </div>
        )
    )
}

export default PostList;