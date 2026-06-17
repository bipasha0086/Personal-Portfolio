import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  titleClassName,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  titleClassName?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl space-y-4">
        <p 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-500 uppercase tracking-widest pb-2" 
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {eyebrow}
        </p>
        {title && (
          <h2 className={`font-[family-name:var(--font-display)] text-3xl leading-tight text-foreground sm:text-4xl ${titleClassName || ""}`}>
            {title}
          </h2>
        )}
        {description && (
          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}