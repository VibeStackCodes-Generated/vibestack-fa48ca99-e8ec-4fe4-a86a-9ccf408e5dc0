import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface LightboxModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  image: string
  title: string
  category: string
  description?: string
}

const LightboxModal = ({ open, onOpenChange, image, title, category, description }: LightboxModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-background/95 border-border/70">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <motion.img
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={image}
            alt={`${title} - ${category}`}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
          <div className="space-y-4">
            <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{category}</div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {description ??
                "Each piece is crafted with meditative precision, balancing intricate geometry with organic flow to evoke calm and wonder."}
            </p>
            <div className="rounded-xl border border-border/70 bg-secondary/40 p-4 text-sm text-muted-foreground">
              Available for commissions, exhibitions, and collaborations. Contact SuMandala for custom sizes and framing.
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LightboxModal
