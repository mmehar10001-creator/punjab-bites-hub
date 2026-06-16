import { Helmet } from "react-helmet-async";
import deg from "@/assets/pf/deg.jpg";

const rows: { name: string; urdu: string; qty: string; price: string }[] = [
  { name: "Sada Pulao", urdu: "سادہ پلاؤ", qty: "10 kg chawal", price: "Rs. 10,000" },
  { name: "Channa Pulao", urdu: "چنا پلاؤ", qty: "10 kg chawal + 2 kg channa", price: "Rs. 11,000" },
  { name: "Vegetable Pulao", urdu: "سبزی پلاؤ", qty: "10 kg chawal + 6 kg sabzi", price: "Rs. 13,000" },
  { name: "Chicken Pulao", urdu: "چکن پلاؤ", qty: "10 kg chawal + 6 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Pulao", urdu: "مٹن پلاؤ", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 22,000" },
  { name: "Beef Pulao", urdu: "بیف پلاؤ", qty: "10 kg chawal + 6 kg gosht", price: "Rs. 19,000" },
  { name: "Chicken Biryani", urdu: "چکن بریانی", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 22,000" },
  { name: "Mutton Biryani", urdu: "مٹن بریانی", qty: "10 kg chawal + 10 kg gosht", price: "Rs. 33,000" },
  { name: "Special Zarda", urdu: "اسپیشل زردہ", qty: "10 kg chawal, kishmish, kheer", price: "Rs. 20,000" },
  { name: "Chicken Qorma", urdu: "چکن قورمہ", qty: "12 kg murgh", price: "Rs. 17,000" },
  { name: "Mutton Qorma", urdu: "مٹن قورمہ", qty: "12 kg gosht", price: "Rs. 36,000" },
  { name: "Beef Qorma", urdu: "بیف قورمہ", qty: "12 kg gosht (with bone)", price: "Rs. 22,000" },
];

const phones = ["051-5706222", "0343-7117361", "0302-5527361"];

export default function Catering() {
  return (
    <>
      <Helmet>
        <title>Catering / Deg · Punjab Foods</title>
        <meta name="description" content="Deg catering for weddings, events and functions in Rawalpindi — Pulao, Biryani, Qorma and Zarda." />
        <meta property="og:title" content="Catering Deg Service · Punjab Foods" />
        <meta property="og:description" content="Sada, Channa, Chicken, Mutton and Beef degs. Bookings on call." />
        <meta property="og:image" content={deg} />
      </Helmet>
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <img src={deg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Catering Service</p>
          <h1 className="font-serif text-5xl md:text-7xl">Deg Menu</h1>
          <p className="mt-6 text-muted-foreground text-lg">Shadi, gham, aur har taqreeb par parcel aap ke paas — ek phone call par.</p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden border border-border">
            <table className="w-full">
              <thead className="bg-card">
                <tr>
                  <th className="text-left p-5 text-xs uppercase tracking-[0.2em] text-primary">Dish</th>
                  <th className="text-left p-5 text-xs uppercase tracking-[0.2em] text-primary hidden md:table-cell">Quantity</th>
                  <th className="text-right p-5 text-xs uppercase tracking-[0.2em] text-primary">Price</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-t border-border hover:bg-card/50 transition-colors">
                    <td className="p-5 font-serif text-lg">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span>{r.name}</span>
                        <span className="text-base text-foreground/60" lang="ur" dir="rtl">{r.urdu}</span>
                      </div>
                      <p className="md:hidden text-xs text-muted-foreground italic mt-1">{r.qty}</p>
                    </td>
                    <td className="p-5 text-muted-foreground text-sm hidden md:table-cell">{r.qty}</td>
                    <td className="p-5 text-right text-primary font-medium whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-16 text-center border border-primary/30 p-10 bg-card">
            <h2 className="font-serif text-3xl mb-4">Place an Order</h2>
            <p className="text-muted-foreground mb-6">Call us directly for catering bookings and bulk orders.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="text-sm tracking-wider border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all">{p}</a>
              ))}
              <a href="https://wa.me/923437117361" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider bg-[#25D366] text-white px-6 py-3 hover:opacity-90 transition-all">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}