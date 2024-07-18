import Container from '@/app/_components/container';
import { HeroPost } from '@/app/_components/hero-post';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';

export function BlogPosts() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Container id="blogs" className="py-10">
      <h1 className="uppercase text-gray-500 dark:text-gray-400 mb-10">Blog Posts</h1>
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  );
}
