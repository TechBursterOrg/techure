import { Link } from 'react-router-dom';
import Logo from './Logo';

const columns = [
  {
    title: 'Services',
    links: [
      { name: 'Website Development', to: '/services' },
      { name: 'Web Applications', to: '/services' },
      { name: 'Mobile Apps', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'How we work', to: '/about' },
      { name: 'Our work', to: '/work' },
      { name: 'FAQ', to: '/faq' },
      { name: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'techburster@gmail.com', href: 'mailto:techburster@gmail.com' },
      { name: '+44 7511435209', href: 'tel:+447511435209' },
      { name: 'Hainault, Ilford, Essex' },
    ],
  },
];

interface FooterLink {
  name: string;
  to?: string;
  href?: string;
}

const linkClass = 'inline-block break-words py-1 text-sm text-fg-2 transition-colors hover:text-fg';

const FooterItem = ({ link }: { link: FooterLink }) => {
  if (link.to) return <Link to={link.to} className={linkClass}>{link.name}</Link>;
  if (link.href) return <a href={link.href} className={linkClass}>{link.name}</a>;
  return <span className="inline-block py-1 text-sm text-fg-2">{link.name}</span>;
};

const Footer = () => {
  return (
    <footer className="border-t border-line pb-10 pt-16">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" aria-label="Techburster home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-[34ch] text-sm text-fg-2">
              Websites, web applications and mobile apps for businesses that want technology to drive growth.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <span className="eyebrow">{col.title}</span>
              <ul className="mt-4 grid gap-1">
                {col.links.map((link: FooterLink) => (
                  <li key={link.name}>
                    <FooterItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-fg-3 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Techburster. All rights reserved.</p>
          <p>Built in the UK.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
