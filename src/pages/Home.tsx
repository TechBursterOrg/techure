import { Link } from 'react-router-dom';
import Hero from '../component/Hero';
import Services from '../component/Services';
import About from '../component/About';
import Portfolio from '../component/Portfolio';
import Faq from '../component/Faq';
import Reveal from '../component/Reveal';

// A short tour of the site: each section is a preview that links to its full page.
const Home = () => (
  <>
    <Hero />
    <Services compact />
    <About />
    <Portfolio limit={3} />
    <Faq limit={3} />
    <section className="section">
      <Reveal className="wrap">
        <div className="rounded-lg border border-line-strong bg-surface bg-[radial-gradient(120%_90%_at_50%_0%,#1f2225,transparent_70%)] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2.5rem,7vw,5.5rem)] text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal" />
            Start here
          </span>
          <h2 className="mx-auto mt-4 max-w-[18ch]">Let's build something.</h2>
          <p className="lead mx-auto mt-6 max-w-[52ch]">
            Ready to turn your idea into working software? Tell us about your project for a free consultation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-metal">
              Start your project
            </Link>
            <a href="mailto:techburster@gmail.com" className="btn-ghost">
              Email us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default Home;
