import type { PostNode } from "@site/types/Post";

type BlogCardProps = { post: PostNode }

const BlogCard: React.FC<BlogCardProps> = ({post}) => {
    return(
        <div>
            <div className="w-full object-hover rounded-3xl p-6 bg-(--color-primary-container) overflow-hidden">
                {post.coverImage?.url && <img alt={post.title} className="rounded-xl" src={post.coverImage.url}/>}
                <div>
                    <h1 className="mt-3 mb-3 font-extrabold text-2xl text-(--color-primary-on-container)">{post.title}</h1>
                    <p className="text-(--color-primary-on-container)">{post.brief}</p>
                    <a className="text-(--color-tertiary-on-container)" href={`/blog/${post.id}`}><p className="mt-4 text-end">Read ➤</p></a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;