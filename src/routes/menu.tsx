import { createFileRoute } from "@tanstack/react-router";
import pulaoSpecialNokabab from "@/assets/pf/pulao-special-nokabab.jpg";
import pulaoSingleChoice from "@/assets/pf/pulao-single-choice.jpg";
import pulaoSpecialChoice from "@/assets/pf/pulao-special-choice.jpg";
import channaPulao from "@/assets/pf/channa-pulao.jpg";
import simplePulao from "@/assets/pf/simple-pulao.jpg";
import pulaoKabab from "@/assets/pf/pulao-kabab.jpg";
import channay from "@/assets/pf/channay.jpg";
import salad from "@/assets/pf/salad.jpg";
import raita from "@/assets/pf/raita.jpg";
import roastHalf from "@/assets/pf/roast-half.jpg";
import roastFull from "@/assets/pf/roast-full.jpg";
import chickenPiece from "@/assets/pf/chicken-piece.jpg";
import shamiKabab from "@/assets/pf/shami-kabab.jpg";
import zarda from "@/assets/pf/zarda.jpg";
import softDrink from "@/assets/pf/soft-drink.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu · Punjab Foods" },
      { name: "description", content: "Full à la carte menu — Chicken Pulao, Roast, Shami Kabab, Zarda and more. Prices in PKR." },
      { property: "og:title", content: "Menu · Punjab Foods" },
      { property: "og:description", content: "Chicken Pulao, Roast, Kabab, Sides and Sweets. Fresh daily." },
    ],
  }),
  component: MenuPage,
});

type Item = { img: string; name: string; urdu: string; sub?: string; price: string };
type Section = { title: string; urdu: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Chicken Pulao",
    urdu: "چکن پلاؤ",
    items: [
      { img: pulaoSpecialNokabab, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Single without kabab", price: "Rs. 430" },
      { img: pulaoSingleChoice, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Single Choice", price: "Rs. 510" },
      { img: pulaoSingleChoice, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Single", price: "Rs. 500" },
      { img: pulaoSpecialNokabab, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Special without kabab", price: "Rs. 580" },
      { img: pulaoSpecialChoice, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Special Choice", price: "Rs. 670" },
      { img: pulaoSpecialChoice, name: "Chicken Pulao", urdu: "چکن پلاؤ", sub: "Special", price: "Rs. 650" },
    ],
  },
  {
    title: "Pulao & Sides",
    urdu: "پلاؤ اور لوازمات",
    items: [
      { img: channaPulao, name: "Channa Pulao", urdu: "چنا پلاؤ", price: "Rs. 350" },
      { img: simplePulao, name: "Simple Pulao", urdu: "سادہ پلاؤ", price: "Rs. 280" },
      { img: pulaoKabab, name: "Pulao Kabab", urdu: "پلاؤ کباب", price: "Rs. 350" },
      { img: channay, name: "Special Channay", urdu: "اسپیشل چنے", sub: "Full", price: "Rs. 250" },
      { img: salad, name: "Salad", urdu: "سلاد", price: "Rs. 40" },
      { img: raita, name: "Raita", urdu: "رائتہ", price: "Rs. 40" },
    ],
  },
  {
    title: "Roast & Kabab",
    urdu: "روسٹ اور کباب",
    items: [
      { img: roastHalf, name: "Chicken Roast", urdu: "چکن روسٹ", sub: "Half", price: "Rs. 700" },
      { img: roastFull, name: "Chicken Roast", urdu: "چکن روسٹ", sub: "Full", price: "Rs. 1300" },
      { img: chickenPiece, name: "Chicken Piece", urdu: "چکن پیس", sub: "1/8", price: "Rs. 180" },
      { img: shamiKabab, name: "Shami Kabab", urdu: "شامی کباب", sub: "Per Dozen", price: "Rs. 540" },
    ],
  },
  {
    title: "Sweets & Drinks",
    urdu: "میٹھا اور مشروبات",
    items: [
      { img: zarda, name: "Zarda", urdu: "زردہ", price: "Rs. 150" },
      { img: softDrink, name: "Soft Drink", urdu: "کولڈ ڈرنک", sub: "Coke / Nova", price: "Rs. 80" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">À la Carte</p>
        <h1 className="font-serif text-5xl md:text-7xl">Our Menu</h1>
        <p className="mt-4 text-2xl text-foreground/80" lang="ur" dir="rtl">ہمارا مینو</p>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Prepared fresh daily. All prices in Pakistani Rupees.</p>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-24">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-primary/60" />
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">{s.title}</h2>
                  <span className="h-px w-12 bg-primary/60" />
                </div>
                <p className="mt-3 text-xl text-foreground/70" lang="ur" dir="rtl">{s.urdu}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {s.items.map((it, i) => (
                  <article key={i} className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-2">
                      <h3 className="font-serif text-2xl font-semibold text-foreground leading-tight">{it.name}</h3>
                      <p className="text-2xl text-foreground font-medium" lang="ur" dir="rtl">{it.urdu}</p>
                      {it.sub && <p className="text-base text-muted-foreground">{it.sub}</p>}
                      <div className="mt-auto pt-3 border-t border-border/60">
                        <p className="text-2xl font-bold text-primary">{it.price}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}