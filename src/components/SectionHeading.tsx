import { ReactNode } from "react"

const SectionHeading = ({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) => {
  return (
    <div className="space-y-3">
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{subtitle}</div>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground font-['Cormorant_Garamond']">
        {title}
      </h2>
      {children && <div className="text-muted-foreground max-w-2xl leading-relaxed">{children}</div>}
    </div>
  )
}

export default SectionHeading