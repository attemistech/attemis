import { cn } from "@/lib/utils";

type PageWrapperProps = React.ComponentProps<"main">;

export const PageWrapper = ({
  children,
  className,
  ...props
}: PageWrapperProps) => {
  return (
    <main
      className={cn(
        "min-h-[calc(100vh-102px)] w-full mt-[102px] overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};
