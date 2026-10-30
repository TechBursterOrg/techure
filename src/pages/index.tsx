import { Link } from 'react-router-dom';
import PageHero from '../component/PageHero';
import Services from '../component/Services';
import About from '../component/About';
import Portfolio from '../component/Portfolio';
import Faq from '../component/Faq';
import Contact from '../component/Contact';

export { default as Home } from './Home';

export const ServicesPage = () => (
  <>
    <PageHero eyebrow="What we do" title="We build software for growing businesses.">
      From a first website to a full product, we handle design, development and launch, so you can
      focus on running your business.
    </PageHero>
    <Services head={false} />
  </>
);

export const AboutPage = () => (
  <>
    <PageHero eyebrow="How we work" title="Four steps from idea to launch.">
      We blend creativity with technical expertise to craft solutions that meet a high bar and exceed
      expectations.
    </PageHero>
    <About head={false} />
  </>
);

export const WorkPage = () => (
  <>
    <PageHero eyebrow="Our work" title="Featured projects.">
      Recent projects, and how they helped businesses grow with better software.
    </PageHero>
    <Portfolio head={false} />
  </>
);

export const FaqPage = () => (
  <>
    <PageHero eyebrow="Questions" title="Techburster, briefly." />
    <Faq head={false} />
  </>
);

export const ContactPage = () => (
  <>
    <PageHero eyebrow="Start here" title="Let's build something.">
      Ready to turn your idea into working software? Tell us about your project for a free consultation.
    </PageHero>
    <Contact head={false} />
  </>
);

export const NotFound = () => (
  <PageHero eyebrow="404" title="This page doesn't exist.">
    <Link to="/" className="font-semibold text-steel transition-colors hover:text-fg">
      Back to the homepage →
    </Link>
  </PageHero>
);
