import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-6 py-3 rounded-lg font-medium transition-all duration-200',
          variant === 'primary' && 'bg-accent hover:bg-accent-hover text-white',
          variant === 'secondary' && 'bg-card hover:bg-border text-white',
          variant === 'outline' && 'border border-border hover:border-accent text-white',
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
