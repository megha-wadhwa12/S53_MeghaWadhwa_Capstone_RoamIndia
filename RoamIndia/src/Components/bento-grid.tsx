import React from 'react';
import { cn } from "./../utils/cn";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[21rem] grid-cols-1 md:grid-cols-3 gap-2 md:gap-1 d:max-h-60 max-w-7xl md:mx-auto lg:mx-auto lg:gap-0 w-[80vw] h-[100vh]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  header?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({ className, title, header }) => {
  return (
    <div
      className={cn(
        "relative row-span-1 w-full rounded-xl group transition duration-300 shadow-input dark:shadow-none p-2 dark:border-white/[0.2] flex flex-col",
        className
      )}
    >
      <div className="overflow-hidden rounded-md">
        <img
          className="h-[52vh] w-full object-cover transform transition duration-300 group-hover:scale-110  group-hover:brightness-75"
          src={header}
          alt={title?.toString()}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="asul-regular text-white text-center text-xl lg:text-md">
          {title}
        </div>
      </div>
    </div>
  );
};
