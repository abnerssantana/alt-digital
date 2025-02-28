import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Define se o container deve ter padding reduzido em telas mobile */
  compact?: boolean;
}

export function Container({
  children,
  className,
  compact = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        compact 
          ? "px-3 sm:px-4 md:px-6 lg:container" 
          : "px-4 sm:px-6 md:px-8 lg:container",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}