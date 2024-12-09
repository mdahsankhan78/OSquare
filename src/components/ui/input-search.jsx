import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from "@/lib/utils";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = React.forwardRef(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="relative w-full flex justify-center"> {/* Centering the container */}
      <div className="relative w-full max-w-80"> {/* Set a max-width to ensure input doesn't stretch too much */}
        {/* Icon placed inside input, aligned to the left */}
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-2/3 transform -translate-y-1 text-gray-800 z-10"
        />
        <input
          autoComplete="off"
          type={type}
          className={cn(
            "relative w-full rounded-xl flex h-9 pl-12 pr-3 py-6 text-gray-800 bg-input shadow-sm transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
});

Search.displayName = "Search";

export { Search };
