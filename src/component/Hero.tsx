import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const fade = `transition-all duration-700 ease-snap ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`;
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <section id="hero" className="relative isolate pt-[max(8.5rem,min(16vw,12rem))]">
      <div className="slate" aria-hidden="true">
        <div className="slate__turn">
          <div className="slate__rule" />
          <div className="slate__band" />
          <div className="slate__ground" />
          <div className="slate__drop" />
        </div>
      </div>

      <div className="wrap flex flex-col items-center text-center">
        <span className={`eyebrow ${fade}`}>Websites · Web apps · Mobile apps</span>

        <h1
          className={`${fade} mt-6 max-w-[16ch] text-[max(2.6rem,min(1.3rem+5.6vw,5.4rem))] leading-[1.02] tracking-[-0.035em]`}
          style={delay(100)}
        >
          Ideas into working software.
        </h1>

        <p className={`${fade} lead mt-6 max-w-[60ch]`} style={delay(200)}>
          We design and build websites, web applications and mobile apps for businesses that want
          technology to drive real growth.
        </p>

        <div className={`${fade} mt-8 flex flex-wrap justify-center gap-3`} style={delay(300)}>
          <Link to="/contact" className="btn-metal">
            Start your project
          </Link>
          <Link to="/work" className="btn-ghost">
            See our work
          </Link>
        </div>

        <p className={`${fade} mt-6 font-mono text-sm text-fg-3`} style={delay(400)}>
          Based in Essex, UK · Free consultation
        </p>
      </div>

      <div className={`${fade} wrap mt-16 md:mt-20`} style={delay(500)}>
        <div className="overflow-hidden rounded-lg bg-surface shadow-shot">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-raised" />
            <span className="h-2.5 w-2.5 rounded-full bg-raised" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal" />
            <span className="ml-3 font-mono text-xs text-fg-3">techburster.com</span>
          </div>
          <img
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&dpr=2"
            alt="Code on a developer's screen"
            className="aspect-[2/1] w-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
