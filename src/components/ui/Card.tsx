import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
