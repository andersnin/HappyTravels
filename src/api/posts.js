import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: 'e8f47065216d92b5c3c1937213',
    version: "v5.0"
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors",
        })
        .catch(err => {
            console.error(err);
        });
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug,
            include: "tags,authors",
        })
        .catch(err => {
            console.error(err);
        });
}
