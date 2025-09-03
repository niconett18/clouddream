import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withContainer?: boolean;
  withMotion?: boolean;
  delay?: number;
}

export default function Section({
  children,
  className = "",
  id,
  withContainer = true,
  withMotion = true,
  delay = 0,
}: SectionProps) {
  const content = withContainer ? (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">{children}</div>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
    >
      {content}
    </section>
  );
}
