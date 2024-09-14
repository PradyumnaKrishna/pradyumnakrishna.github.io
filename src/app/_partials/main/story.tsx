import Accordion from '@/app/_components/accordion';
import Container from '@/app/_components/container';

export function Story() {
  return (
    <Container id="story" className="py-20">
      <div>
        <h1 className="uppercase text-gray-500 dark:text-gray-400 mb-10">My Story</h1>
        <p className="mb-10">
          Software Engineer with a passion for problem-solving and innovation. Expertise in
          Kubernetes, LLMs, Software Architecture, and DevOps. Enthusiastic about Science and Tech,
          loves to tinker and build cool projects. Active in the open source communities of Cloud
          Native and Software Security. Previously contributed to CNCF projects including in-toto
          and Thanos.
        </p>
      </div>

      <Accordion title="work">
        <p className="md:pl-4">
          I am currently a Software Engineer at NoScrubs, a startup offering affordable and premium
          laundry services. At NoScrubs, I focus on building products, introducing automation, and
          streamlining operations to drive efficiency and growth for the company.
        </p>
      </Accordion>

      <Accordion title="experience">
        <p className="md:pl-4">
          Worked on <b>LLM Powered LMS</b>, where I integrated Large Language Models into a learning
          system. Delivered personalized learning, automated content, and provided AI-driven
          feedback. Made learning more interactive and smart, bringing AI directly into education.
          This project took my passion for AI and education to the next level.
        </p>

        <p className="md:pl-4">
          Contributed to <b>Thanos</b> Project as an LFx Mentee with CNCF in 2023. Enhanced the
          PromQL engine by incorporating Query Execution Observability features, integrated query
          explanation functionality, improving usability and allowing users to retrieve detailed
          execution plans for better performance optimization.{' '}
          <a href="/posts/lfx-23/">Read More</a>
        </p>

        <p className="md:pl-4">
          As a <b>Google Summer of Code contributor</b> in 2022, contributing to <b>in-toto</b>.
          Worked on the implementing DSSE signature wrapper for in-toto and integrating it with the
          in-toto verification process without introducing any breaking changes.{' '}
          <a href="/posts/gsoc-22/">Read More</a>
        </p>
      </Accordion>
    </Container>
  );
}
