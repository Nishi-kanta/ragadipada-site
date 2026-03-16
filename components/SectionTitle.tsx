interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-black tracking-tight text-primary-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-saffron ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
