import { ReactNode } from 'react';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, children }: PageHeroProps) => (
  <section className="relative isolate pb-[max(3rem,min(6vw,5rem))] pt-[max(8rem,min(14vw,11rem))]">
    <div className="slate slate--compact" aria-hidden="true">
      <div className="slate__turn">
        <div className="slate__rule" />
        <div className="slate__band" />
        <div className="slate__ground" />
        <div className="slate__drop" />
      </div>
    </div>

    <Reveal className="wrap flex flex-col items-center text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-6 max-w-[18ch] text-[clamp(2.5rem,1.6rem+4vw,4.75rem)] leading-[1.02] tracking-[-0.035em]">
        {title}
      </h1>
      {children && <p className="lead mt-6 max-w-[60ch]">{children}</p>}
    </Reveal>
  </section>
);

export default PageHero;
