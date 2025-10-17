import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"div"> & {
  hero?: boolean;
};

export const Section = ({
  children,
  className,
  hero,
  ...props
}: SectionProps) => {
  return (
    <div
      className={cn(
        `flex items-center justify-center px-5 sm:px-20 border-b border-[#0000001c] w-full`,
        hero ? "min-h-[calc(100vh-102px)]" : "min-h-screen",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
