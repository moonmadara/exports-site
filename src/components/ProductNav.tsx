import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProductLink {
  label: string;
  to: string;
}

interface ProductNavProps {
  previous?: ProductLink;
  next?: ProductLink;
}

export default function ProductNav({ previous, next }: ProductNavProps) {
  if (!previous && !next) return null;

  return (
    <div className="mt-16 flex items-center justify-between gap-4 pt-8 border-t border-cream-300">
      {previous ? (
        <Link
          to={previous.to}
          className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-cream-200 hover:border-grove-300 hover:shadow-md transition-all max-w-[48%]"
        >
          <ArrowLeft className="w-5 h-5 text-grove-600 group-hover:-translate-x-1 transition-transform shrink-0" />
          <div className="min-w-0">
            <span className="text-xs text-soil-400 uppercase tracking-wider">
              Previous Product
            </span>
            <p className="text-sm font-semibold text-soil-900 truncate group-hover:text-grove-700 transition-colors">
              {previous.label}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.to}
          className="group flex items-center justify-end gap-3 px-6 py-4 rounded-xl bg-white border border-cream-200 hover:border-grove-300 hover:shadow-md transition-all max-w-[48%] text-right"
        >
          <div className="min-w-0">
            <span className="text-xs text-soil-400 uppercase tracking-wider">
              Next Product
            </span>
            <p className="text-sm font-semibold text-soil-900 truncate group-hover:text-grove-700 transition-colors">
              {next.label}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-grove-600 group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
