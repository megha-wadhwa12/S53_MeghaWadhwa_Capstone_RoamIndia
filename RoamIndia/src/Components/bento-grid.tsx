import { cn } from "./../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-9xl mx-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  header?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] border border-transparent justify-center flex flex-col space-y-4",
        className
      )}
    >
      <img className="rounded-md" src={header} alt="" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="asul-regular text-[#24758F] text-xl text-center mb-2">
          {title}
        </div>
      </div>
    </div>
  );
};
