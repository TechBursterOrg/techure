import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tech: string[];
  link?: string;
}

const filters = ['All', 'Website', 'Web App', 'Mobile App'];

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Home Management and Services Coordination App',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React', 'Firebase'],
    link: 'https://homeheroes.help',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Website',
    image: 'https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Next.js', 'Tailwind'],
    link: 'https://the-cho.netlify.app',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Website',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React.js', 'Express'],
    link: 'https://opwan.netlify.app',
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['Flutter', 'Firebase'],
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'Website',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tech: ['React', 'Framer Motion'],
    link: 'https://peterokusanya.netlify.app',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const body = (
    <>
      <div className="aspect-[4/3] overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 grayscale-[35%] transition duration-500 ease-snap group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{project.category}</span>
        <h3 className="mt-2 text-lg">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded border border-line-strong px-2 py-0.5 font-mono text-xs text-fg-2">
              {tech}
            </span>
          ))}
        </div>
        <span className={`mt-auto pt-6 text-sm font-semibold ${project.link ? 'text-steel group-hover:text-fg' : 'text-fg-3'}`}>
          {project.link ? 'View project →' : 'Coming soon'}
        </span>
      </div>
    </>
  );

  const cardClass =
    'group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-150 ease-snap';

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${cardClass} hover:border-line-hover`}>
      {body}
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
  );
};

interface PortfolioProps {
  head?: boolean;
  // Show only the first few live projects, without filters
  limit?: number;
}

const Portfolio = ({ head = true, limit }: PortfolioProps) => {
  const [filter, setFilter] = useState('All');
  const filteredProjects = limit
    ? projects.filter((p) => p.link).slice(0, limit)
    : filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className={`section ${head ? '' : '!pt-0'}`}>
      <div className="wrap">
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end ${head ? 'lg:justify-between' : 'lg:justify-center'}`}>
          {head && (
            <Reveal className="max-w-[44rem]">
              <span className="eyebrow">Our work</span>
              <h2 className="mt-4">Featured projects.</h2>
              <p className="mt-6 text-lg text-fg-2">
                Recent projects, and how they helped businesses grow with better software.
              </p>
            </Reveal>
          )}

          {limit ? (
            <Reveal delay={100}>
              <Link to="/work" className="btn-ghost">
                All projects →
              </Link>
            </Reveal>
          ) : (
          <Reveal delay={100}>
            <div className="inline-flex flex-wrap gap-0.5 rounded-full border border-line-strong bg-surface p-1">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ease-snap ${
                    filter === item ? 'bg-metal text-ink' : 'text-fg-2 hover:bg-raised hover:text-fg'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
