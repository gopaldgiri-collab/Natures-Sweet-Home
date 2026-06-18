import { CONTACT } from '@/lib/site-data';

function LegalShell({ title, intro, children }) {
  return (
    <>
      <section className="pt-32 pb-10 bg-beige-deep">
        <div className="container mx-auto max-w-4xl px-5 md:px-8">
          <div className="gold-divider">Legal</div>
          <h1 className="font-serif text-5xl text-forest mt-3">{title}</h1>
          {intro && <p className="text-muted-foreground mt-3 leading-relaxed">{intro}</p>}
        </div>
      </section>
      <section className="py-16"><div className="container mx-auto max-w-4xl px-5 md:px-8 prose prose-stone max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-forest [&_h2]:mt-8 [&_p]:text-muted-foreground [&_li]:text-muted-foreground">{children}</div></section>
    </>
  );
}
export { LegalShell };
