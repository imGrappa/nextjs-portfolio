import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-[500px] mx-auto px-4 pt-24", className)}>
      {children}
    </div>
  );
};
