import { Intro } from '@/app/_partials/main/intro';
import { Story } from '@/app/_partials/main/story';
import { BlogPosts } from './_partials/main/blogs';
import { Projects } from './_partials/main/projects';

export default function Index() {
  return (
    <main>
      <Intro />
      <Story />
      <BlogPosts />
      <Projects />
    </main>
  );
}
