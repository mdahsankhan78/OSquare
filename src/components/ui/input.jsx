import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type,icon, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <FontAwesomeIcon
        icon={icon}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent"
      />
      <input
      autocomplete="off"
        type={type}
        className={cn(
          "flex h-9 w-full pr-10 pl-3 py-6 text-base border-b border-accent bg-transparent shadow-sm transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
})

Input.displayName = "Input"

export { Input }
