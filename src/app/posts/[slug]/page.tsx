import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import { DEFAULT_AUTHOR } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';

type Params = Promise<{ slug: string }>;

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author || DEFAULT_AUTHOR}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL ?? '');
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: post.ogImage ? [{ url: post.ogImage.url }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@iPradyumnaK',
      images: post.ogImage ? [{ url: post.ogImage.url }] : [],
    },
    metadataBase: metadataBase,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
