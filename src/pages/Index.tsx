import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroPulao from "@/assets/pf/hero-pulao.jpg";
import pulaoSpecial from "@/assets/pf/pulao-special-nokabab.jpg";
import roastHalf from "@/assets/pf/roast-half.jpg";
import shamiKabab from "@/assets/pf/shami-kabab.jpg";
import zarda from "@/assets/pf/zarda.jpg";

const signatures = [
  { img: pulaoSpecial, name: "Chicken Pulao", price: "from Rs. 430" },
  { img: roastHalf, name: "Chicken Roast", price: "from Rs. 700" },
  { img: shamiKabab, name: "Shami Kabab", price: "Rs. 540 / dozen" },
  { img: zarda, name: "Zarda", price: "Rs. 150" },
];

const pulaoMenu = [
  { sub: "Single without kabab", price: "Rs. 430" },
  { sub: "Single Choice", price: "Rs. 510" },
  { sub: "Single", price: "Rs. 500" },
  { sub: "Special without kabab", price: "Rs. 580" },
  { sub: "Special Choice", price: "Rs. 670" },
  { sub: "Special", price: "Rs. 650" },
];

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Punjab Foods · Pulao, Kabab, Roast & Deg in Rawalpindi</title>
        <meta name="description" content="Traditional Pulao, Kabab, Roast and Deg catering from Punjab Foods, Rawalpindi. Home delivery and bookings on call." />
        <meta property="og:title" content="Punjab Foods · Rawalpindi" />
        <meta property="og:description" content="Pulao · Kabab · Roast · Deg. Order in or book catering." />
        <meta property="og:image" content={heroPulao} />
      </Helmet>
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img src={heroPulao} alt="Chicken Pulao" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Rawalpindi · Since Years</p>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground max-w-4xl leading-[1.05]">Punjab Foods</h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 font-serif italic">Pulao · Kabab · Roast · Deg</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase border border-primary px-8 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all">View Menu</Link>
            <Link to="/catering" className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all">Book Catering</Link>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">A taste of Punjab on every plate</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            From the slow-cooked aroma of our signature Chicken Pulao to the smoky char of fresh Shami Kabab, every dish at Punjab Foods is prepared with traditional recipes, hand-picked spices, and the same care we'd serve our own family.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Signature</p>
              <h2 className="font-serif text-4xl md:text-5xl">House Favourites</h2>
            </div>
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase text-primary border-b border-primary pb-1">Full Menu →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((s) => (
              <div key={s.name} className="group">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-xl mt-4">{s.name}</h3>
                <p className="text-sm text-primary mt-1">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl">Chicken Pulao</h2>
          </div>
          <div className="space-y-5">
            {pulaoMenu.map((m) => (
              <div key={m.sub} className="flex items-baseline gap-4 border-b border-border pb-4">
                <div className="flex-1">
                  <h3 className="font-serif text-xl">Chicken Pulao</h3>
                  <p className="text-sm text-muted-foreground italic">{m.sub}</p>
                </div>
                <div className="flex-1 border-b border-dotted border-border/60 mb-2" />
                <p className="text-primary font-medium">{m.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="text-xs tracking-[0.25em] uppercase border border-primary px-8 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all inline-block">See Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden">
        <img src={roastHalf} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Weddings · Events · Functions</p>
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Catering Deg Service</h2>
          <p className="text-muted-foreground text-lg mb-10">
            From a 10 kg Sada Pulao Deg to a 12 kg Mutton Qorma — we cater shadi, gham, and every occasion with a single phone call.
          </p>
          <Link to="/catering" className="text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all inline-block">View Deg Menu</Link>
        </div>
      </section>
    </>
  );
}