import { categories, type Category } from "@/data/projects";

export type Filter = "All" | Category;

export function PortfolioFilters({
  value,
  onChange,
}: {
  value: Filter;
  onChange: (next: Filter) => void;
}) {
  const options: Filter[] = ["All", ...categories];
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={`rounded-xs border px-4 py-2 text-sm transition-colors ${
              active
                ? "border-forest bg-forest text-cream"
                : "border-line text-charcoal/80 hover:border-forest hover:text-forest"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}