import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-technician.jpg";
import repairImg from "@/assets/repair-work.jpg";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shenge Technology — Laptop & Phone Sales, Repair in Abuja" },
      { name: "description", content: "Certified laptop & mobile sales, repair, software and accessories at Banex Plaza, Wuse 2, Abuja. Fast, reliable, trusted by hundreds." },
      { property: "og:title", content: "Shenge Technology — Passport to Reach the World" },
      { property: "og:description", content: "Laptops, phones, repair and software — Banex Plaza, Wuse 2, Abuja." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Hardware Repair", d: "Board-level diagnostics, component replacement, and quality-tested repairs." },
  { t: "LCD & Battery Replacement", d: "Genuine screens and batteries for laptops & phones, fitted same-day where possible." },
  { t: "OS & Software Install", d: "Windows, macOS recovery, drivers, productivity suites and licensed software." },
  { t: "Virus Removal", d: "Deep malware scans, ransomware recovery and ongoing protection setup." },
  { t: "Memory Upgrades", d: "RAM and SSD upgrades to make slow machines feel new again." },
  { t: "Sales — Laptops & Phones", d: "Curated stock of reliable laptops, smartphones, accessories and gaming gear." },
];

const tips = [
  { n: "01", t: "Free Up Disk Space", d: "Remove rarely used software, old games and clear browser cache." },
  { n: "02", t: "Turn Off Indexing", d: "Indexing on every local drive slows down other programs in the background." },
  { n: "03", t: "Scan Regularly", d: "Run scheduled scans for viruses, spyware and registry errors." },
  { n: "04", t: "Defragment", d: "Defragging your hard drive is a great way to boost overall performance." },
];

const reviews = [
  { n: "Ochu Esther", b: "I love the laptops I got from you — they're working very fine and they are fast. The engineering services are top notch.", w: "Bought a laptop" },
  { n: "Anako Dija", b: "Bought an HP laptop 1030 G8. The laptop is very fast and good, the battery lasts for long and it's very clean. Thank you very much.", w: "HP 1030 G8" },
  { n: "Ricco Habor", b: "Their systems are really reliable with low cost price. Highly recommend Shenge Technology.", w: "Repeat customer" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand shadow-brand">
        <span className="font-display text-lg font-bold text-ink">S</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-bold tracking-tight">SHENGE</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technology</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#tips" className="hover:text-brand">Tips</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
          <a href="tel:+2348065718750" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition hover:bg-brand hover:text-brand-foreground">
            Call now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-noise opacity-40" />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              5.0 ★ rated · Banex Plaza, Abuja
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-balance md:text-7xl">
              Your passport to <span className="bg-gradient-brand bg-clip-text text-transparent">reach the world</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Certified laptop & mobile sales, expert repair, software installs and accessories — trusted by hundreds across Abuja since day one.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-brand transition hover:scale-[1.02]">
                Book a repair
              </a>
              <a href="#services" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore services →
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[["100%","Trusted"],["6+ yrs","In service"],["24h","Turnaround"]].map(([k,v]) => (
                <div key={k}>
                  <div className="font-display text-2xl font-bold text-brand-glow">{k}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Shenge Technology technician at workshop"
              width={1280}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-brand"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-background p-4 text-foreground shadow-card">
              <div className="text-3xl font-display font-bold text-brand">100%</div>
              <div className="text-xs font-medium text-muted-foreground">Certified technicians · Genuine parts</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="border-y border-border bg-brand/10 py-4 overflow-hidden">
        <div className="flex animate-pulse justify-around gap-12 px-6 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 whitespace-nowrap">
          <span>Laptops</span><span>·</span>
          <span>Mobile Repair</span><span>·</span>
          <span>Accessories</span><span>·</span>
          <span>Software Dev</span><span>·</span>
          <span>Gaming Laptops</span><span>·</span>
          <span>OS Reinstall</span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">What we do</div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold md:text-5xl">
              Laptops & mobile gadgets — <span className="text-muted-foreground">sales & repair</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From cracked screens to full software rebuilds — one shop covers your whole device life.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="group relative bg-card p-8 transition hover:bg-ink hover:text-ink-foreground">
              <div className="font-display text-xs text-muted-foreground group-hover:text-brand">0{i + 1}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">{s.d}</p>
              <div className="mt-6 text-sm font-medium text-brand opacity-0 transition group-hover:opacity-100">
                Get this →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT — repair imagery */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <img src={repairImg} alt="Hands repairing laptop motherboard" width={1280} height={900} loading="lazy" className="h-full w-full object-cover" />
          <div className="flex flex-col justify-center p-10 lg:p-16">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">The workshop</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Board-level repairs, no shortcuts.</h2>
            <p className="mt-6 text-white/70">
              Our technicians diagnose at the component level, source genuine parts, and stand by every repair. Whether it's a swollen battery, a fried logic board or a slow Windows install — we fix what others replace.
            </p>
            <ul className="mt-8 grid gap-3 text-sm">
              {["Hardware repair & diagnostics","Reinstall operating systems","LCD & battery replacement","Memory upgrades & SSD swaps","Virus removal & data recovery","Install licensed applications"].map(x => (
                <li key={x} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-ink">✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Free tips</div>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Steps to boost your PC's performance</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">A few smart habits keep your machine fast. Try these before you upgrade.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tips.map(t => (
            <div key={t.n} className="rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-brand">
              <div className="font-display text-5xl font-bold text-brand/30">{t.n}</div>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-wider">{t.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">About us</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl text-balance">
              A small Abuja shop with world-class standards.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Shenge Technology Limited has been Abuja's quiet powerhouse for computers and mobile gadgets — selling, repairing, and rebuilding devices for individuals, students and businesses. We treat every device like it matters, because to you, it does.
            </p>
            <blockquote className="mt-8 border-l-4 border-brand bg-card p-6 italic shadow-card">
              "A father's love may not always be spoken, but it is seen in every sacrifice, every prayer, and every act of care."
              <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground not-italic">— From the owner</footer>
            </blockquote>
          </div>
          <img src={productsImg} alt="Curated tech products" width={1280} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Reviews</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">5.0 from every customer.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="font-display text-5xl font-bold">5.0</div>
            <div>
              <div className="text-brand">★★★★★</div>
              <div className="text-xs text-muted-foreground">Based on Google reviews</div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map(r => (
            <figure key={r.n} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="text-brand">★★★★★</div>
              <blockquote className="mt-4 flex-1 text-foreground/90">"{r.b}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display font-semibold">{r.n}</div>
                <div className="text-xs text-muted-foreground">{r.w}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid-noise opacity-30" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Visit / Contact</div>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Come by, or just call us.</h2>
            <p className="mt-6 max-w-md text-white/70">Walk in, drop your device, or call to chat. We're open six days a week.</p>

            <dl className="mt-10 grid gap-6">
              <div className="border-l-2 border-brand pl-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Address</dt>
                <dd className="mt-1 text-lg">Suite FBE 16, Banex Plaza, Alexandria Crescent, Wuse 2, Abuja, FCT</dd>
              </div>
              <div className="border-l-2 border-brand pl-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href="tel:+2348065718750" className="hover:text-brand">0806 571 8750</a>
                  <span className="text-white/40"> · </span>
                  <a href="tel:+2348023153196" className="hover:text-brand">0802 315 3196</a>
                </dd>
              </div>
              <div className="border-l-2 border-brand pl-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Hours</dt>
                <dd className="mt-1 text-lg">Mon–Sat · Closes 6:30 PM</dd>
              </div>
              <div className="border-l-2 border-brand pl-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Instagram</dt>
                <dd className="mt-1 text-lg">@shengetechnology</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+2348065718750" className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-ink shadow-brand">Call 0806 571 8750</a>
              <a href="https://maps.google.com/?q=Shenge+Technology+Banex+Plaza+Abuja" target="_blank" rel="noopener" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold hover:bg-white/10">Get directions →</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Shenge Technology location"
              src="https://www.google.com/maps?q=Banex+Plaza+Wuse+2+Abuja&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <Logo />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Shenge Technology Limited · Passport to reach the world.</p>
        </div>
      </footer>
    </div>
  );
}
