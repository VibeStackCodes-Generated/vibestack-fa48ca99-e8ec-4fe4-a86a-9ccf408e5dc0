import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ArtworkCardProps {
  title: string
  category: string
  image: string
  size?: string
  onClick?: () => void
}

const ArtworkCard = ({ title, category, image, size, onClick }: ArtworkCardProps) => {
  return (
    <motion.div whileHover={{ y: -6 }} className="group cursor-pointer" onClick={onClick}>
      <Card className="overflow-hidden border-border/70 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:shadow-lg">
        <div className="relative">
          <img
            src={image}
            alt={`${title} - ${category}`}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-4">
          <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{category}</div>
          <div className="mt-1 text-lg font-semibold text-foreground">{title}</div>
          {size && <div className="text-sm text-muted-foreground">{size}</div>}
        </div>
      </Card>
    </motion.div>
  )
}

export default ArtworkCard
