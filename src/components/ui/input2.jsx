import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { cn } from "@/lib/utils"

const Input2 = React.forwardRef(({ className, type, icon, icon2, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="relative w-full">
            {open ?
                <FontAwesomeIcon
                    onClick={() => setOpen(false)}
                    icon={icon2}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent"
                />
                :
                <FontAwesomeIcon
                    onClick={() => setOpen(true)}
                    icon={icon}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent"
                />

            }

            <input

                autocomplete="off"
                type={open ? 'text' : 'password'}
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

Input2.displayName = "Input2"

export { Input2 }
