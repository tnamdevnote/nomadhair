import { cn } from "@/lib/utils";

export interface FallbackProps {
  className?: string;
  image: React.ReactNode;
  title: string;
  body?: string;
  children: React.ReactNode;
}

function Fallback({ className, image, title, body, children }: FallbackProps) {
  return (
    <section
      aria-label={title}
      className={cn([
        "flex h-screen w-full flex-col items-center justify-center gap-16 px-4 py-8 md:px-16 lg:px-32 lg:py-32",
        className,
      ])}
    >
      {image}
      <div className="flex flex-col items-center">
        <h2 className="text-center text-base">{title}</h2>
        <p className="text-center">{body}</p>
      </div>
      {children}
    </section>
  );
}

export default Fallback;
