/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronDown, MoveRight, Spade, Heart, Diamond, Club, FlaskConical, Cake } from "lucide-react";

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBZ7ji1_XGsftZa5VpqjbtckCKC1G9qiA8pwvVM4ye0AIIhfIfrKAQvdisKUvTlHqbxmyBYp__4Fe1OjA6sAa3xIs13ZOc18_10MSW9iRYRaTJQB9KJCT8xVutMLl4uEzFNqSFD-5irzJ4_Q6-BqXyOcc9O-4xDfDs--FZjxRo1Q7HFzKnjQRKB7Ze_5FKo_d2ECGQ_rWgMd8suY0Az9zWx4_JcBlwle2J5rna7GEIekFsLstvnVbD0PFCzj34x1J82IfeAS6_464",
  teaParty: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG3O7b9EzueGW4CGeLzF6OnRyPb9LvxoyDdBgkmskpCTCZz1JE9sly58nMP15ka6qLZhMFg6nk9i5flovpfgU890yOlkCpi0iZiNJH-Rixubl8thY-W2kazCAAwqLVFMriScITz3QSOxYwImPf8yRhwEnbeGDlqpdkR-K6zkVXhXOoATN8a4kiZsZSZV3rXtEpPBxrXhSR-yd8zHj9aHozE8IL4cyTF9a0MwROVJEoWFr8lX0lCdu_eJhj1pTDwxx7jeGBPI94Yeg",
  roses: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6qIAeLpX33e_47oCbD1ZIOw8dzLCC5GU18nOnGHK8qoFtFgxXh0-By8VXoAUK68WctGyXL9aRSXHwElE83_EFvA4_OysSOaxNX0fqP3wQn3KkGDs892c1wm4cGLXJ3zjoQdmW095VLKO8DS5chkiZW-QO5aIVgcWF2ljBANuVUstfWt0hDQfkM_eMONspSM3zSNnAvG1ozJhWFAAKhmTYeQo4GPLT3mVe95TE26i0zFZhYEWVotZlyw7_oiRMYneFrqWsoZjKV-I",
  cheshire: "https://lh3.googleusercontent.com/aida-public/AB6AXuChtKxX093tMYNu2-Z_s_QrydWuyzftt24Vn4mDyr174lsNrl1K2_IaWrSzlDnMOv0qHLqHyQPzMkxluRsoPXUj9lyqq2gDgLpp_0ag051QBIJulZoLtLcj22iSIEKpARqKfCVh0WVJzNr9x0CTlNzi1_Q3F1bFBZ-vIUibZt-1fhNQDHk1duySHsArBZdB2Ffoy6nlHOHo83_xCSqUxBs8jgCImCGr_EmeqyV3F1Q8ONSKk_SbmGC8N76jyr7eOrVjFmb1C2gGdKY",
  alchemy: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-0Av-4xMJAFksgHdhwvLZHTobhBsksni_WF0hrB-VrkinLKXhw-vBNIi7_YPqk4X5RPmmOIBgf0F86ly-gsX4eDajSkhhnWx9go-z2-B3TksapsjJVe-pvm_UzVV8h4T0JandTkQR7t2xzrQr0LkuFJIy7mAn3n0BIakP0GCcuruSZEnFvhnTB6kzmDdyIUe2EKnIdKBGw3xmBSJp8MOLwqzbS8Y-0dKjzC2yY-6oKUV2TwXIogBm7hlJHD6Kv3_WRIIV3lumhlQ"
};

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-4 md:px-margin-desktop h-20">
      <div className="font-serif text-2xl md:text-3xl text-wonder-primary tracking-tighter">
        Through the Glass
      </div>
      <div className="hidden lg:flex gap-10 items-center">
        {["The Archive", "Curiosities", "Shadowlands"].map((item, idx) => (
          <a 
            key={item} 
            href="#" 
            className={`font-sans text-sm tracking-wide transition-colors duration-300 ${idx === 0 ? "text-wonder-primary border-b border-wonder-primary pb-1" : "text-on-surface-variant hover:text-wonder-secondary"}`}
          >
            {item}
          </a>
        ))}
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blood/20 text-on-surface px-6 py-2 label-mono border border-blood hover:bg-blood/40 hover:shadow-glow-blood transition-all"
      >
        Drink Me
      </motion.button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover filter grayscale-[0.2]" 
          src={IMAGES.hero} 
          alt="Dark forest" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-dim/40 to-surface-dim"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl text-on-surface mb-6 drop-shadow-2xl"
        >
          We're All Mad Here
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-xl md:text-2xl text-on-surface-variant italic font-light tracking-wide mb-12"
        >
          Descend into the shadows of the looking glass.
        </motion.p>
        <div className="flex justify-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            className="h-px bg-wonder-tertiary/40"
          />
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
      >
        <span className="label-mono text-on-surface-variant">Explore</span>
        <ChevronDown size={20} className="text-wonder-primary" />
      </motion.div>
    </section>
  );
}

function Archive() {
  const cards = [
    { id: "RECORD 001", title: "The Mad Tea Party", desc: "Fragments of logic floating in a cold, dark brew.", img: IMAGES.teaParty, color: "text-wonder-tertiary", border: "hover:border-wonder-tertiary/40" },
    { id: "DECREE VII", title: "The Queen's Decree", desc: "A garden of thorns painted in the color of original sin.", img: IMAGES.roses, color: "text-wonder-secondary", border: "hover:border-wonder-secondary/40" },
    { id: "MANIFEST 033", title: "The Cheshire's Grin", desc: "A lingering threat suspended in the absolute void.", img: IMAGES.cheshire, color: "text-wonder-primary", border: "hover:border-wonder-primary/40" }
  ];

  return (
    <section className="py-32 px-4 md:px-margin-desktop bg-surface-dim relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mist-overlay -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">The Archive</h2>
          <div className="brass-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-[#1a1a1a] border border-white/5 p-1 transition-all duration-500 ${card.border}`}
            >
              <div className="overflow-hidden aspect-[3/4]">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <span className={`label-mono ${card.color} block mb-3`}>{card.id}</span>
                <h3 className="text-2xl mb-2">{card.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curiosities() {
  return (
    <section className="py-32 px-4 md:px-margin-desktop bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-square border border-white/10 p-8 relative grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="absolute inset-0 border border-wonder-tertiary/20 translate-x-4 translate-y-4 -z-10" />
            <img src={IMAGES.alchemy} alt="Alchemy lab" className="w-full h-full object-cover filter sepia-[0.2] contrast-125" />
          </div>
        </motion.div>

        <div className="space-y-12">
          <header>
            <span className="label-mono text-wonder-tertiary block mb-4">Laboratory Records</span>
            <h2 className="text-4xl md:text-5xl">Curiosities of Consumption</h2>
          </header>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <FlaskConical className="text-wonder-tertiary w-8 h-8 shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-2xl mb-2 italic">The 'Drink Me' Elixir</h4>
                <p className="text-on-surface-variant leading-relaxed font-light">A distillation of pure liquid shrinking, flavored with cherry tart, custard, and pine-apple.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Cake className="text-wonder-tertiary w-8 h-8 shrink-0 mt-1" strokeWidth={1} />
              <div>
                <h4 className="text-2xl mb-2 italic">The 'Eat Me' Cake</h4>
                <p className="text-on-surface-variant leading-relaxed font-light">A currants-studded confection that forces the spine to seek the rafters.</p>
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 label-mono text-wonder-tertiary group"
          >
            <span>Read the formula</span>
            <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function ShadowlandsAction() {
  return (
    <section className="relative py-40 bg-black text-center overflow-hidden">
      <div className="absolute inset-0 mist-overlay opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Lose Yourself in the Shadowlands</h2>
        <p className="text-xl md:text-2xl text-on-surface-variant italic font-light mb-12">
          The looking glass is waiting to show you what you truly are.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#690000" }}
            className="bg-blood text-on-surface px-12 py-5 text-xl font-serif border border-wonder-secondary transition-all shadow-glow-blood"
          >
            Drink Me
          </motion.button>
          <a href="#" className="label-mono text-on-surface-variant border-b border-white/20 pb-1 hover:text-wonder-tertiary transition-colors">
            Stay on the surface
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-4 md:px-margin-desktop bg-[#0e0e0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="text-center lg:text-left">
          <div className="font-serif text-3xl text-wonder-tertiary mb-4">Through the Glass</div>
          <p className="label-mono text-on-surface-variant/60">© 1865-2024 Down the Rabbit Hole.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {["The Looking Glass", "The Queen's Decree", "Mad Tea Party", "Curiouser & Curiouser"].map((link) => (
            <a key={link} href="#" className="text-on-surface-variant text-sm hover:text-wonder-tertiary underline decoration-white/10 transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-wonder-tertiary/40">
          <Spade size={20} strokeWidth={1} />
          <Heart size={20} strokeWidth={1} />
          <Diamond size={20} strokeWidth={1} />
          <Club size={20} strokeWidth={1} />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blood/30">
      <Navbar />
      <Hero />
      <Archive />
      <Curiosities />
      <ShadowlandsAction />
      <Footer />
    </div>
  );
}
