import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const steps = [
  {
    kicker: 'Discover',
    title: 'We start with your goals.',
    description: 'A free consultation to understand your business, your users and what success looks like.',
  },
  {
    kicker: 'Design',
    title: 'Creative work with a purpose.',
    description: 'Unique solutions for complex challenges, designed around the people who will use them.',
  },
  {
    kicker: 'Build',
    title: 'Swift execution, no shortcuts.',
    description: 'Rapid development with emerging technologies, without compromising on quality.',
  },
  {
    kicker: 'Launch',
    title: 'Results you can measure.',
    description: 'We ship solutions that drive business success, and stay on hand once they are live.',
  },
];

const targets = { projects: 50, clients: 25, years: 3 };

const About = ({ head = true }: { head?: boolean }) => {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView]);

  const stats = [
    { number: `${counters.projects}+`, label: 'Projects completed' },
    { number: `${counters.clients}+`, label: 'Happy clients' },
    { number: `${counters.years}+`, label: 'Years experience' },
    { number: '24/7', label: 'Support available' },
  ];

  return (
    <section id="about" className="section section--surface">
      <div className="wrap">
        {head && (
        <Reveal className="max-w-[44rem]">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-4">Four steps from idea to launch.</h2>
          <p className="mt-6 text-lg text-fg-2">
            We blend creativity with technical expertise to craft solutions that meet a high bar and
            exceed expectations.
          </p>
          <Link to="/about" className="mt-6 inline-block font-semibold text-steel transition-colors hover:text-fg">
            More on how we work →
          </Link>
        </Reveal>
        )}

        <div className={`${head ? 'mt-16' : ''} grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4`}>
          {steps.map((step, index) => (
            <Reveal key={step.kicker} delay={index * 100}>
              <div className="border-t border-line-strong pt-6">
                <span className="eyebrow !normal-case !tracking-[0.06em]">
                  <span className="text-signal">0{index + 1}</span> {step.kicker}
                </span>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-fg-2">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div ref={ref} className="mt-20 grid grid-cols-2 rounded-lg border border-line bg-ink lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-8 ${i % 2 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${
                i === 2 ? 'lg:border-l' : ''
              }`}
            >
              <div className="text-[clamp(1.9rem,1.4rem+2.2vw,3.25rem)] font-bold leading-none tracking-[-0.03em]">
                {stat.number}
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
