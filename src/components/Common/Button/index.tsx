import { type HTMLProps, ReactNode } from "react"
import clsx from 'clsx'
import styles from './styles.module.css'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  type?: "submit" | "button" | "reset"
  variant?: "primary" | "minimal"
  className?: string
  children: ReactNode
}

export const Button = ({
  type, 
  className = '',
  variant = 'primary',
  children, 
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={clsx(styles.btn, {
        [styles["btn-primary"]]: variant === 'primary',
        [styles["btn-minimal"]]: variant === 'minimal',
      }, className)} 
      type={type} 
      {...props}
    >
      {children}
    </button>
  )
}
