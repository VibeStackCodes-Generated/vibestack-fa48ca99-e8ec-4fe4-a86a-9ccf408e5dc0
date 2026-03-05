import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Palette,
  Sparkles,
  Star,
  ArrowUpRight,
} from "lucide-react"
import NavBar from "@/components/NavBar"
import SectionHeading from "@/components/SectionHeading"
import ArtworkCard from "@/components/ArtworkCard"
import LightboxModal from "@/components/LightboxModal"

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Message should be at least 10 characters."),
})

type FormValues = z.infer<typeof formSchema>

const artworkData = {
  Mandala: [
    {
      title: "Celestial Mandala",
      category: "Mandala Art",
      size: "Acrylic on canvas · 24x24",
      image: "https://img.vibestack.site/s/mandala-art-intricate/600/400",
    },
    {
      title: "Lotus Geometry",
      category: "Mandala Art",
      size: "Ink & gold leaf · 18x18",
      image: "https://img.vibestack.site/s/mandala-art-gold/600/400",
    },
  ],
  "Soro Art": [
    {
      title: "Rhythmic Soro",
      category: "Soro Art",
      size: "Mixed media · 20x30",
      image: "https://img.vibestack.site/s/tribal-patterns-texture/600/400",
    },
    {
      title: "Echoed Lines",
      category: "Soro Art",
      size: "Natural pigment · 16x20",
      image: "https://img.vibestack.site/s/ethnic-pattern-art/600/400",
    },
  ],
  "Acrylic Painting": [
    {
      title: "Desert Bloom",
      category: "Acrylic Painting",
      size: "Acrylic on canvas · 30x40",
      image: "https://img.vibestack.site/s/acrylic-painting-abstract/600/400",
    },
    {
      title: "Quiet River",
      category: "Acrylic Painting",
      size: "Acrylic on canvas · 24x36",
      image: "https://img.vibestack.site/s/acrylic-landscape-warm/600/400",
    },
  ],
  "Patachitra Art": [
    {
      title: "Odisha Tales",
      category: "Patachitra Art",
      size: "Traditional scroll · 18x24",
      image: "https://img.vibestack.site/s/patachitra-art-odisha/600/400",
    },
    {
      title: "Temple Whispers",
      category: "Patachitra Art",
      size: "Natural dyes · 20x30",
      image: "https://img.vibestack.site/s/indian-folk-art-scroll/600/400",
    },
  ],
  "Madhubani Art": [
    {
      title: "Garden of Mithila",
      category: "Madhubani Art",
      size: "Hand-painted paper · 20x20",
      image: "https://img.vibestack.site/s/madhubani-art-colorful/600/400",
    },
    {
      title: "Sacred Stories",
      category: "Madhubani Art",
      size: "Natural pigment · 18x24",
      image: "https://img.vibestack.site/s/madhubani-art-pattern/600/400",
    },
  ],
  "Fusion Art": [
    {
      title: "Fusion Resonance",
      category: "Fusion Art",
      size: "Mixed media · 24x30",
      image: "https://img.vibestack.site/s/fusion-art-modern/600/400",
    },
    {
      title: "Sacred Merge",
      category: "Fusion Art",
      size: "Ink + acrylic · 20x28",
      image: "https://img.vibestack.site/s/modern-folk-art/600/400",
    },
  ],
  "Abstract Art": [
    {
      title: "Soft Echoes",
      category: "Abstract Art",
      size: "Acrylic & pastel · 30x30",
      image: "https://img.vibestack.site/s/abstract-art-earthy/600/400",
    },
    {
      title: "Clay Horizon",
      category: "Abstract Art",
      size: "Mixed media · 24x36",
      image: "https://img.vibestack.site/s/abstract-art-texture/600/400",
    },
  ],
}

const featuredWorks = [
  {
    title: "Mandala of Serenity",
    category: "Mandala Art",
    size: "24x24 · Acrylic, ink, gold leaf",
    image: "https://img.vibestack.site/s/mandala-art-detailed/600/400",
  },
  {
    title: "Mithila Rhythm",
    category: "Madhubani Art",
    size: "18x24 · Natural pigment",
    image: "https://img.vibestack.site/s/madhubani-art-traditional/600/400",
  },
  {
    title: "Abstract Earthsong",
    category: "Abstract Art",
    size: "30x40 · Mixed media",
    image: "https://img.vibestack.site/s/abstract-art-organic/600/400",
  },
]

const Index = () => {
  const [selected, setSelected] = useState<{
    title: string
    category: string
    image: string
    size?: string
  } | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const allArtworks = useMemo(() => Object.values(artworkData).flat(), [])

  const onSubmit = () => {
    toast.success("Message sent! SuMandala will reply within 48 hours.")
    form.reset()
  }

  return (
    <div className="bg-background text-foreground">
      <NavBar />
      <main className="pt-24" id="home">
        <section className="relative overflow-hidden">
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/70 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                Mandala & Folk Art Studio
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl font-['Cormorant_Garamond']">
                SuMandala: Art that breathes calm, culture, and sacred geometry.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A modern portfolio celebrating Mandala, Soro, Acrylic, Patachitra, Madhubani, Fusion, and Abstract
                art. Each piece is handcrafted to bring meditative balance and soulful storytelling.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#gallery">Explore Gallery</a>
                </Button>
                <Button size="lg" variant="secondary" className="rounded-full" asChild>
                  <a href="#contact">Commission Art</a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" /> 120+ curated artworks
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" /> Featured in 14 exhibitions
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <img
                src="https://img.vibestack.site/s/mandala-art-ornate/1600/900"
                alt="Mandala artwork hero"
                className="w-full rounded-3xl object-cover shadow-xl"
                loading="eager"
              />
              <Card className="absolute -bottom-6 left-6 right-6 border-border/70 bg-background/90 p-4 shadow-lg">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Signature piece</span>
                  <span>2026 Collection</span>
                </div>
                <div className="mt-2 text-lg font-semibold">Mandala of Stillness</div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionHeading title="About the Artist" subtitle="Supriya Mandala">
                SuMandala blends ancestral Indian art forms with modern abstraction. With 12+ years of practice, Supriya
                uses mandalas as meditative anchors, Soro rhythms as visual music, and vibrant folk narratives to craft
                immersive, soulful pieces.
              </SectionHeading>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Studio Base</div>
                    <div className="text-sm text-muted-foreground">Bhubaneswar · Kolkata · Online</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3">
                  <Palette className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Specialties</div>
                    <div className="text-sm text-muted-foreground">Mandala, Patachitra, Madhubani, Fusion, Abstract</div>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <a href="#featured">
                  View featured works <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://img.vibestack.site/s/artist-portrait-headshot-studio-lighting/600/600"
                alt="Artist portrait"
                className="w-full rounded-3xl object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 right-6 rounded-2xl border border-border/70 bg-background/90 px-5 py-3 text-sm text-muted-foreground shadow-lg">
                "Art is the bridge between rhythm and stillness."
              </div>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            <SectionHeading title="Gallery" subtitle="Artistic Styles">
              Explore curated collections across seven art forms. Each category is crafted with its own textures, motifs,
              and storytelling traditions.
            </SectionHeading>
            <div className="space-y-12">
              {Object.entries(artworkData).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{category}</h3>
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {items.length} works
                    </span>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <ArtworkCard
                        key={item.title}
                        title={item.title}
                        category={item.category}
                        image={item.image}
                        size={item.size}
                        onClick={() => setSelected(item)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading title="Featured Works" subtitle="Curated Collection">
              A spotlight on limited-edition artworks that blend sacred geometry, folk narratives, and luminous color
              fields. Available for collectors and exhibitions.
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWorks.map((item) => (
                <ArtworkCard
                  key={item.title}
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  size={item.size}
                  onClick={() => setSelected(item)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary/40 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <SectionHeading title="Contact" subtitle="Commissions & Collaborations">
                Share your vision and SuMandala will craft a custom artwork that resonates with your space and story.
                Expect a reply within 48 hours.
              </SectionHeading>
              <Card className="border-border/70 bg-background/80 p-6">
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <Input placeholder="Your name" {...form.register("name")} />
                    {form.formState.errors.name && (
                      <p className="mt-2 text-sm text-destructive">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input type="email" placeholder="Email address" {...form.register("email")} />
                    {form.formState.errors.email && (
                      <p className="mt-2 text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea rows={5} placeholder="Tell me about your project" {...form.register("message")} />
                    {form.formState.errors.message && (
                      <p className="mt-2 text-sm text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="border-border/70 bg-background/80 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact details</div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">hello@sumandala.studio</div>
                      <div className="text-sm text-muted-foreground">Email for commissions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">+1 (415) 555-2740</div>
                      <div className="text-sm text-muted-foreground">Studio line · 10am – 6pm IST</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">@sumandala.art</div>
                      <div className="text-sm text-muted-foreground">Daily sketches & behind the scenes</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="border-border/70 bg-background/80 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Studio availability</div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Accepting private commissions, gallery collaborations, and brand partnerships for mindful spaces.
                  Worldwide shipping available.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="rounded-full border border-border/70 px-3 py-1">Custom Mandalas</span>
                  <span className="rounded-full border border-border/70 px-3 py-1">Artist Talks</span>
                  <span className="rounded-full border border-border/70 px-3 py-1">Workshops</span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60 bg-background py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">SuMandala</div>
              <p className="text-sm text-muted-foreground">Modern mandala, folk, and abstract art studio.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="#home" className="hover:text-foreground">Home</a>
              <a href="#about" className="hover:text-foreground">About</a>
              <a href="#gallery" className="hover:text-foreground">Gallery</a>
              <a href="#featured" className="hover:text-foreground">Featured Works</a>
              <a href="#contact" className="hover:text-foreground">Contact</a>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:hello@sumandala.studio" aria-label="Email" className="hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+14155552740" aria-label="Phone" className="hover:text-foreground">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </main>

      <LightboxModal
        open={Boolean(selected)}
        onOpenChange={(open) => !open && setSelected(null)}
        image={selected?.image ?? allArtworks[0].image}
        title={selected?.title ?? allArtworks[0].title}
        category={selected?.category ?? allArtworks[0].category}
        description={selected?.size}
      />
    </div>
  )
}

export default Index