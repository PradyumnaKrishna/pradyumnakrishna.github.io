import Accordion from '@/app/_components/accordion';
import Container from '@/app/_components/container';

export function Story() {
  return (
    <Container id="story" className="py-20">
      <div>
        <h1 className="uppercase text-gray-500 dark:text-gray-400 mb-10">My Story</h1>
        <p className="mb-10 tracking-normal">
          I&apos;m Pradyumna Krishna, an experienced software developer, a tech enthusiast, and a
          hobbyist gamer. I apply Artificial Intelligence, Cloud, IoT, and other technologies into
          building scalable systems, web applications and automation tools. As a tech enthusiast,
          I&apos;m passionate about learning new technologies and exploring them. I am an active
          open-source contributor, and in my free time I contribute to open-source projects and
          build new projects.
        </p>
      </div>

      <Accordion title="work">
        <p className="md:pl-4 tracking-normal">
          Currently, I am a post graudate student, a CNCF Ambassador, and an open-source
          contributor. I provide guidance and mentorship to students and developers, helping them
          join open-source communities and becoming a better developer.
        </p>
      </Accordion>

      <Accordion title="experience">
        <p className="md:pl-4 tracking-normal">
          In 2022, I contributed towards in-toto, an open source project that comes under the{' '}
          <a href="https://cncf.io"> Cloud Native Computing Foundation (CNCF)</a>, as a Google
          Summer of Code contributor. <a href="https://onpy.in/posts/gsoc-22/">Read More</a>
        </p>
        <p className="md:pl-4 tracking-normal">
          In early 2021, I was working as a Software Developer Intern for Vityasa. We had a great
          team of developers who work on building new features and products for their customers.
        </p>
      </Accordion>
    </Container>
  );
}
