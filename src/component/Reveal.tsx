import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-snap ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
