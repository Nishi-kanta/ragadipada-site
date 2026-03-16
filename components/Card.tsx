import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
  badge?: string;
}

export default function Card({ title, description, image, href, badge }: CardProps) {
  return (
    <Link href={href} className="premium-card group block">
      {image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {badge && (
            <div className="absolute top-4 right-4 rounded-full bg-saffron px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-900">
              {badge}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 transition-colors group-hover:text-primary-600">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-stone-600 line-clamp-2">
            {description}
          </p>
        )}
        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary-700">
          <span>Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
