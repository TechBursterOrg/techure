import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';

const contactInfo = [
  { title: 'Phone', info: '+44 7511435209', href: 'tel:+447511435209' },
  { title: 'Location', info: 'Hainault, Ilford, Essex' },
  { title: 'Hours', info: 'Mon–Fri, 9AM–6PM' },
];

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = ({ head = true }: { head?: boolean }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');
    emailjs
      .sendForm('service_20lrn3c', 'template_3pwnz8t', form.current, {
        publicKey: 'tY1rQxCnh_kLTjQHl',
      })
      .then(
        () => {
          setStatus('sent');
          setFormData(emptyForm);
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        },
      );
  };

  return (
    <section id="contact" className={`section ${head ? '' : '!pt-0'}`}>
      <div className="wrap">
        <Reveal>
          <div className="rounded-lg border border-line-strong bg-surface bg-[radial-gradient(120%_90%_at_50%_0%,#1f2225,transparent_70%)] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2.5rem,7vw,5.5rem)]">
            <div className="mx-auto max-w-narrow text-center">
              {head && (
                <>
                  <span className="eyebrow inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    Start here
                  </span>
                  <h2 className="mt-4">Let's build something.</h2>
                  <p className="lead mt-6">
                    Ready to turn your idea into working software? Tell us about your project for a free consultation.
                  </p>
                </>
              )}
              <a
                href="mailto:techuredev@gmail.com"
                className={`${head ? 'mt-8' : ''} inline-block break-words rounded border border-line-strong bg-ink px-5 py-3 font-mono text-[clamp(1rem,0.9rem+0.6vw,1.25rem)] tracking-[-0.01em] transition-colors duration-150 ease-snap hover:border-line-hover hover:bg-raised`}
              >
                techuredev@gmail.com
              </a>
              <dl className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm text-fg-3">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-2">
                    <dt className="sr-only">{item.title}</dt>
                    <dd>{item.href ? <a href={item.href} className="hover:text-fg">{item.info}</a> : item.info}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <form ref={form} onSubmit={sendEmail} className="mx-auto mt-12 grid max-w-narrow gap-5 border-t border-line pt-12 text-left">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="field" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="field" placeholder="you@company.com" />
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Phone</span>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="field" placeholder="+44 7000 000000" />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Subject</span>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="field" placeholder="Project subject" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-3">Message</span>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="field resize-none" placeholder="Tell us about your project…" />
              </label>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <p className="text-sm text-fg-3" role="status" aria-live="polite">
                  {status === 'sent' && <span className="text-done">Message sent. We'll get back to you within 24 hours.</span>}
                  {status === 'error' && <span className="text-signal">Something went wrong. Please email us directly.</span>}
                  {(status === 'idle' || status === 'sending') && 'We reply within 24 hours.'}
                </p>
                <button type="submit" disabled={status === 'sending'} className="btn-metal w-full disabled:opacity-60 sm:w-auto">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
