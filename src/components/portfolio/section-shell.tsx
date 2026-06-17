import type { ReactNode } from "react";
import { forwardRef } from "react";

export const SectionShell = forwardRef<HTMLElement, {
  id: string;
  children: ReactNode;
  className?: string;
}>(function SectionShellComponent(
  { id, children, className = "" },
  ref
) {
  return (
    <section ref={ref} id={id} className={`scroll-mt-28 py-12 sm:py-16 ${className}`}>
      {children}
    </section>
  );
});