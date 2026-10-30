import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const facts = [
  { label: 'Based', value: 'Essex, United Kingdom' },
  { label: 'Focus', value: 'Websites, web & mobile apps' },
  { label: 'Contact', value: 'Straight to the team' },
];

const services = [
  {
    title: 'Website Development',
    description: 'Responsive websites that captivate visitors and turn them into loyal customers.',
    features: ['SEO-optimized', 'Mobile-first design', 'Lightning fast', 'Conversion focused'],
  },
  {
    title: 'Web Applications',
    description: 'Scalable web applications built on modern technology, with seamless user experiences.',
    features: ['Cloud-native', 'Real-time features', 'Secure & scalable', 'API integration'],
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps that feel at home on every device.',
    features: ['iOS & Android', 'Offline support', 'Push notifications', 'App Store ready'],
  },
];

interface ServicesProps {
  head?: boolean;
  // Short overview for the home page: no facts strip or feature lists
  compact?: boolean;
}

const Services = ({ head = true, compact = false }: ServicesProps) => (
  <section id="services" className={`section ${head ? '' : '!pt-0'}`}>
    <div className="wrap">
      {head && (
      <Reveal className="max-w-[44rem]">
        <span className="eyebrow">What we do</span>
        <h2 className="mt-4">We build software for growing businesses.</h2>
        <p className="mt-6 text-lg text-fg-2">
          From a first website to a full product, we handle design, development and launch, so you
          can focus on running your business.
        </p>
        <Link to="/services" className="mt-6 inline-block font-semibold text-steel transition-colors hover:text-fg">
          Explore our services →
        </Link>
      </Reveal>
      )}

      {!compact && (
      <Reveal delay={100}>
        <dl className={`${head ? 'mt-12' : ''} grid rounded-lg border border-line sm:grid-cols-3`}>
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`px-6 py-4 ${i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''}`}
            >
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">{fact.label}</dt>
              <dd className="mt-1 font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      )}

      <div className={`${head || !compact ? 'mt-16' : ''} grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3`}>
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 100} className="h-full">
            <article className="group flex h-full flex-col bg-ink p-8 transition-colors duration-150 ease-snap hover:bg-surface">
              <span className="font-mono text-sm text-signal">0{index + 1}</span>
              <h3 className="mt-3 text-[clamp(1.45rem,1.25rem+0.9vw,1.9rem)]">{service.title}</h3>
              <p className="mt-4 text-fg-2">{service.description}</p>
              {!compact && (
              <ul className="mt-8 grid gap-2 border-t border-line pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-fg-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fg-3 transition-colors group-hover:bg-signal" />
                    {feature}
                  </li>
                ))}
              </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
