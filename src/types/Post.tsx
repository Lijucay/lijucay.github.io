export type PostNode = {
    id: string;
    title: string;
    brief: string;
    coverImage: { url: string | null } | null;
    publishedAt: string | null;
};

export type PostEdge = {
    node: PostNode;
}

export type Post = PostEdge;