import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const questions = [
  {
    q: 'What does Techburster build?',
    a: 'Websites, web applications and mobile apps, from marketing sites and e-commerce platforms to booking tools and cross-platform iOS and Android apps.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'We pick what suits the project. Recent work uses React, Next.js, Node.js, Express, MongoDB, Firebase, Tailwind and Flutter.',
  },
  {
    q: 'Where are you based?',
    a: 'Hainault, Ilford, in Essex, United Kingdom. We work with clients in the UK and further afield.',
  },
  {
    q: 'How do I start a project?',
    a: 'Send us a message from the contact page or email techburster@gmail.com. We reply within 24 hours to set up a free consultation.',
  },
];

const Faq = ({ head = true, limit }: { head?: boolean; limit?: number }) => (
  <section id="faq" className={head ? 'section section--surface' : 'section !pt-0'}>
    <div className={`wrap grid gap-12 ${head ? 'lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-start' : 'max-w-narrow'}`}>
      {head && (
      <Reveal>
        <span className="eyebrow">Questions</span>
        <h2 className="mt-4">Techburster, briefly.</h2>
        <Link to="/faq" className="mt-6 inline-block font-semibold text-steel transition-colors hover:text-fg">
          All questions →
        </Link>
      </Reveal>
      )}

      <Reveal delay={100} className="faq">
        {questions.slice(0, limit).map((item) => (
          <details key={item.q} className="border-t border-line-strong last:border-b">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-6">
              <h3 className="text-lg">{item.q}</h3>
            </summary>
            <p className="max-w-[62ch] pb-6 text-fg-2">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </div>
  </section>
);

export default Faq;
