import Container from '@/app/_components/container';
import { ProjectCard } from '@/app/_components/project-card';

export function Projects() {
  const projects = [
    {
      title: 'Enigma Protocol',
      description: 'An end to end encrypted messenger using Flask, Websockets, and Vue.js',
      image: '/assets/images/chat.png',
      links: {
        website: 'https://protocol.onpy.in',
        repository: 'https://github.com/PradyumnaKrishna/enigma-protocol',
      },
    },
    {
      title: 'Colab Hacks',
      description:
        'Simple Hacks for Google Colaboratory to boost your productivity and help you to perform daily tasks.',
      image: '/assets/images/hacks.png',
      links: {
        repository: 'https://github.com/PradyumnaKrishna/Colab-Hacks',
      },
    },
    {
      title: 'Face Authentication',
      description:
        'Face Authentication is an API uses Azure Cognitive Services to identify or verify same persons. The underlying API is built with FastAPI.',
      image: '/assets/images/face-recognition.png',
      links: {
        website: 'https://face-auth.onpy.in',
        repository: 'https://github.com/PradyumnaKrishna/face-authentication',
      },
    },
    {
      title: 'Facial AI',
      description:
        'A very simple Flask app that detects how many (if any) faces are there and their respective emotions in the picture. It uses a trained TensorFlow model FER to predict emotions.',
      image: '/assets/images/emotion.png',
      links: {
        repository: 'https://github.com/PradyumnaKrishna/Facial-AI',
      },
    },
  ];

  return (
    <Container id="projects" className="py-20">
      <div>
        <h1 className="uppercase mb-10 text-sky-500">Projects</h1>
        <p className="mb-10">
          I usually work on projects in my free time. I develop them and host their code on my
          GitHub, some of the projects are hosted or deployed using cloud providers to try them.
          Here are some of the projects that are actively developed and maintained.
        </p>

        <div className="flex flex-row flex-wrap gap-y-10 justify-between">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              icon={project.image}
              website={project.links.website}
              repository={project.links.repository}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
